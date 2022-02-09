import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useFirebase } from "../hooks/FirebaseContext";
import formStyles from "../styles/SignForm.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App() {
  const router = useRouter();
  const { signUp } = useFirebase();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    if (data.confirm_password != data.password) return;
    setLoading(true);

    toast
      .promise(signUp(data.email, data.password), {
        loading: "Creating new account...",
        success: "Successfully created your account",
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
    <section className={formStyles.signUp}>
      <Head>
        <title>CashGlance | Sign Up</title>
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
        <label className="flex flex-col">
          <span>Confirm Password</span>
          <input
            disabled={loading}
            type="password"
            placeholder="Confirm Password"
            {...register("confirm_password", { required: true })}
            className={formStyles.input}
          />
        </label>
        <button disabled={loading} type="submit" className={formStyles.button}>
          Sign Up
        </button>
      </form>
    </section>
  );
}
