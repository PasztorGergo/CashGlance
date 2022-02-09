import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useFirebase } from "../hooks/FirebaseContext";
import formStyles from "../styles/SignForm.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App() {
  const router = useRouter();
  const { signin } = useFirebase();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    setLoading(true);

    toast
      .promise(signin(data.email, data.password), {
        loading: "Signing in...",
        success: "Successfully signed in",
        error: (error) => `Error, ${error}`,
      })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section className={formStyles.signIn}>
      <Head>
        <title>CashGlance | Sign In</title>
      </Head>
      <h2 className={formStyles.title}>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        <label className="flex flex-col">
          <span>E-mail address</span>
          <input
            disabled={loading}
            type="email"
            placeholder="john@doe.com"
            {...register("email", { required: true })}
            className={formStyles.input}
          />
        </label>
        <label className="flex flex-col">
          <span>Password</span>
          <input
            disabled={loading}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className={formStyles.input}
          />
        </label>
        <button disabled={loading} type="submit" className={formStyles.button}>
          Sign In
        </button>
      </form>
      <span>
        Do not have an account, then <Link href="/signup">sign up</Link>.
      </span>
    </section>
  );
}
