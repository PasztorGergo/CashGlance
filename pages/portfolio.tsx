import Head from "next/head";
import React from "react";
import FinancialForm from "../components/FinancialForm";
import { useFirebase } from "../hooks/FirebaseContext";

type Props = {};

export default function portfolio({}: Props) {
  const { addExpense, addIncome } = useFirebase();

  return (
    <main className="portfolio flex items-center justify-evenly">
      <Head>
        <title>CashGlance | Portfolio</title>
      </Head>
      <FinancialForm type="expense" financialFunction={addExpense} />
      <FinancialForm type="income" financialFunction={addIncome} />
    </main>
  );
}
