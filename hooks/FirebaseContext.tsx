import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import {
  onSnapshot,
  collection,
  setDoc,
  addDoc,
  doc,
  query,
  where,
  limit,
  orderBy,
} from "@firebase/firestore";
import { auth, db } from "../firebase";
import Finance from "../models/finance";

const FirebaseContext = React.createContext<any>(null);

export function useFirebase() {
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children }: any) {
  type Period = "weekly" | "monthly" | "annually";
  const userCollection = collection(db, "Users");
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentUser, setUser] = useState<any>();
  const [expenseArray, setExpenseArray] = useState<Array<any>>([]);
  const [incomeArray, setIncomeArray] = useState<Array<any>>([]);

  function signUp(email: string, password: string) {
    //#region Authentication
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const respUser = userCredentials.user;
        const { displayName, email, photoURL, uid } = respUser;
        setDoc(doc(userCollection, userCredentials.user.uid), {
          displayName: displayName ?? email?.split("@")[0],
          email: email,
          photoURL: photoURL,
          uid: uid,
        });
      }
    );
  }

  function signin(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    return signOut(auth);
  }

  function signInwithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  //#endregion

  //#region dataFetching
  function getExpenses(timeLimit: number) {
    if (!currentUser) return;

    onSnapshot(
      query(
        collection(db, "Expense"),
        where("uid", "==", currentUser.uid),
        orderBy("date"),
        limit(timeLimit)
      ),
      (snapshot) => {
        setExpenseArray(snapshot.docs.map((doc, index) => doc.data()));
      }
    );
  }
  function getIncome(timeLimit: number) {
    if (!currentUser) return;

    onSnapshot(
      query(
        collection(db, "Income"),
        where("uid", "==", currentUser.uid),
        limit(timeLimit)
      ),
      (snapshot) => {
        setIncomeArray(snapshot.docs.map((doc, index) => doc.data()));
      }
    );
  }
  //#endregion

  //#region writeData
  function addExpense(amount: number, date: string) {
    return addDoc(collection(db, "Expense"), {
      uid: currentUser.uid,
      amount: amount,
      date: date.split("T")[0],
    } as Finance);
  }
  function addIncome(amount: number, date: string) {
    return addDoc(collection(db, "Income"), {
      uid: currentUser.uid,
      amount: amount,
      date: date.split("T")[0],
    } as Finance);
  }
  //#endregion
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        onSnapshot(doc(userCollection, user.uid), (user) => {
          setUser(user.data());
        });
      }
      setLoading(false);
    });
  }, []);
  const value = {
    signInwithGoogle,
    signin,
    signout,
    signUp,
    currentUser,
    getExpenses,
    expenseArray,
    incomeArray,
    getIncome,
    addExpense,
    addIncome,
  };
  return (
    <FirebaseContext.Provider value={value}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}
