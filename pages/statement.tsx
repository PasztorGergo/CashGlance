import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import Styles from "../styles/Statement.module.css";

type Props = {};

export default function statement({}: Props) {
  return (
    <main>
      <Head>
        <title>CashGlance | Statement</title>
      </Head>
      <section
        className={`${Styles.statementContainer} prose-headings:font-bold prose-h2:text-3xl prose-h3:text-xl`}
      >
        <h2>Financial Statement</h2>
        <div className={Styles.incomeStatement}>
          <Card type={"outlined"} rounded={false} className="w-96">
            <h3>Incomes</h3>
          </Card>
          <Card type={"outlined"} rounded={false} className="w-96">
            <h3>Expenses</h3>
          </Card>
        </div>
        <div className={Styles.balanceSheet}>
          <Card type={"outlined"} rounded={false} className="w-full">
            <h3>Assets</h3>
          </Card>
          <Card type={"outlined"} rounded={false} className="w-full">
            <h3>Liabilities</h3>
          </Card>
        </div>
      </section>
    </main>
  );
}
