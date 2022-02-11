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
  doc,
  query,
  where,
  limit,
} from "@firebase/firestore";
import { auth, db } from "../firebase";
import { utcFormat } from "d3";

const FirebaseContext = React.createContext<any>(null);

export function useFirebase() {
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children }: any) {
  type Period = "daily" | "weekly" | "monthly" | "annually";
  const userCollection = collection(db, "Users");
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentUser, setUser] = useState<any>();
  const [timeLimit, setTimeLimit] = useState<number>(1);

  function signUp(email: string, password: string) {
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

  function getExpenses(period: Period = "monthly") {
    if (!currentUser) return;

    switch (period) {
      case "daily":
        setTimeLimit(7);
        break;
      case "weekly":
        setTimeLimit(30);
        break;
      case "monthly":
        setTimeLimit(365);
        break;
      case "annually":
        setTimeLimit(365 * 5);
        break;
    }

    onSnapshot(
      query(
        collection(db, "Expenses"),
        where("uid", "==", currentUser.uid),
        limit(timeLimit)
      ),
      (snapshot) => {
        snapshot.docs.map((doc, index) => {
          console.log(
            new Date(
              Date.UTC(0, 0, 0, 0, 0, doc.data().date - 365 * 24 * 3600 * 1900)
            )
          );
        });
      }
    );
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        onSnapshot(doc(userCollection, user.uid), (user) => {
          setUser(user.data());
        });
      }
    });
    setLoading(false);
  }, []);
  const value = {
    signInwithGoogle,
    signin,
    signout,
    signUp,
    currentUser,
    getExpenses,
  };
  return (
    <FirebaseContext.Provider value={value}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}
