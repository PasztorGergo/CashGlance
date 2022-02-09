import React, { useState } from "react";
import Button from "../components/Button";
import { useFirebase } from "../hooks/FirebaseContext";
import accStyles from "../styles/Account.module.css";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Head from "next/head";

export default function account() {
  const router = useRouter();
  const { currentUser, signout } = useFirebase();
  const [loading, setLoading] = useState<boolean>(false);
  function signOutHandler() {
    setLoading(true);
    toast
      .promise(signout(), {
        loading: "Signing out...",
        success: "Successfully signed out",
        error: (error) => `Error, ${error}`,
      })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }
  return (
    <section>
      <Head>
        <title>CashGlance | Account</title>
      </Head>
      <div className={accStyles.accountHead}>
        <img
          src={currentUser?.photoUrl}
          alt="ProfilePic"
          className={accStyles.avatar}
        />
        <h1 className={accStyles.displayName}>{currentUser?.displayName}</h1>
      </div>
      <div className={accStyles.accountBody}>
        <Button disabled={loading} onClick={signOutHandler} theme="error">
          Sign Out
        </Button>
      </div>
    </section>
  );
}
