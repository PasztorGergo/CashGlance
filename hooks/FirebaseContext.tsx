import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "@firebase/auth";
import { onSnapshot, collection } from "@firebase/firestore";
import { auth, db } from "../firebase";

const FirebaseContext = React.createContext<Object>(() => {});

export function useFirebase() {
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children }: any) {
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentUser, setUser] = useState<User | null>();

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
      if (user) {
        setUser(user);
        onSnapshot(collection(db, "Finance"), (snapshot) => {});
      }
    });
  }, []);
  const value = { signInwithGoogle, signin, signout };
  return (
    <FirebaseContext.Provider value={value}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}
