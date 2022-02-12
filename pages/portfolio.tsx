import Head from "next/head";
import React from "react";
import FinancialForm from "../components/FinancialForm";
import { useFirebase } from "../hooks/FirebaseContext";

type Props = {};

export default function portfolio({}: Props) {
  const { addExpense } = useFirebase();

  return (
    <section className="portfolio">
      <Head>
        <title>CashGlance | Portfolio</title>
      </Head>
      <FinancialForm type="expense" financialFunction={addExpense} />
    </section>
  );
}
