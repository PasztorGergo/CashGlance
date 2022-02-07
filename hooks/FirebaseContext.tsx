import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { onSnapshot, collection, setDoc, doc } from "@firebase/firestore";
import { auth, db } from "../firebase";

const FirebaseContext = React.createContext<any>(null);

export function useFirebase() {
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children }: any) {
  const userCollection = collection(db, "Users");
  const financialCollection = collection(db, "Finance");
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentUser, setUser] = useState<any>();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        onSnapshot(doc(userCollection, user.uid), (user) => {
          setUser(user.data());
        });
        onSnapshot(financialCollection, (snapshot) => {});
      }
    });
    setLoading(false);
  }, []);
  const value = { signInwithGoogle, signin, signout, signUp, currentUser };
  return (
    <FirebaseContext.Provider value={value}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}
