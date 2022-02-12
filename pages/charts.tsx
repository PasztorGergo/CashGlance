import Head from "next/head";
import React, { useEffect, useState } from "react";
import BarChart from "../components/Barchart";
import Card from "../components/Card";
import Selection from "../components/Selection";
import TitleStyle from "../styles/SignForm.module.css";
import { useFirebase } from "../hooks/FirebaseContext";
import { useRouter } from "next/router";

type Props = {};

export default function Charts({}: Props) {
  const { currentUser, getExpenses, expenseArray, getIncome, incomeArray } =
    useFirebase();
  const [BalanceInter, getBalance] = useState<string>("");

  if (!currentUser) {
    useRouter().push("/signin");
    return false;
  }

  return (
    <section className="flex sm:flex-row flex-col justify-evenly items-start py-6 px-4">
      <Head>
        <title>CashGlance | Charts</title>
      </Head>
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Expenses</h2>
        <div>
          <Selection getInterval={getExpenses} className="rounded-md">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </Selection>
          <BarChart data={expenseArray} />
        </div>
      </Card>
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Income</h2>
        <div>
          <Selection getInterval={getIncome} className="rounded-md">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </Selection>
          <BarChart data={incomeArray} />
        </div>
      </Card>
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Balance sheet</h2>
        <div>
          <Selection getInterval={getBalance} className="rounded-md">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </Selection>
          <BarChart data={[1, 2, 3]} />
        </div>
      </Card>
    </section>
  );
}
