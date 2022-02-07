import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Selection from "../components/Selection";
import TitleStyle from "../styles/SignForm.module.css";

type Props = {};

export default function Charts({}: Props) {
  const [ExpenseInter, getExpense] = useState<string>("");
  const [IncomeInter, getIncome] = useState<string>("");
  const [BalanceInter, getBalance] = useState<string>("");

  return (
    <section className="flex sm:flex-row flex-col justify-evenly items-start py-6 px-4">
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Expenses</h2>
        <div>
          <Selection getInterval={getExpense}>
            <option value="weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </Selection>
        </div>
      </Card>
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Income</h2>
        <div>
          <Selection getInterval={getIncome}>
            <option value="weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </Selection>
        </div>
      </Card>
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Balance sheet</h2>
        <div>
          <Selection getInterval={getBalance}>
            <option value="weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </Selection>
        </div>
      </Card>
    </section>
  );
}
