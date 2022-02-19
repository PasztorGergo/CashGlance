import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
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
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <main>
      <Card type="outlined" rounded={true}>
        <BarChart width={730} height={250} data={expenseArray}>
          <CartesianGrid stroke="#ccc"></CartesianGrid>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#226e56"></Bar>
        </BarChart>
      </Card>
    </main>
  );
}
