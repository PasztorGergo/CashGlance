import React, { useEffect, useState } from "react";
import BarChart from "../components/Barchart";
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
          <Selection getInterval={getExpense} className="rounded-md">
            <option value="weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </Selection>
          <BarChart data={[1, 2, 3]} />
        </div>
      </Card>
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Income</h2>
        <div>
          <Selection getInterval={getIncome} className="rounded-md">
            <option value="weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </Selection>
          <BarChart
            data={[
              { year: 1980, efficiency: 24.3, sales: 8949000 },
              { year: 1985, efficiency: 27.6, sales: 10979000 },
              { year: 1990, efficiency: 28, sales: 9303000 },
              { year: 1991, efficiency: 28.4, sales: 8185000 },
              { year: 1992, efficiency: 27.9, sales: 8213000 },
              { year: 1993, efficiency: 28.4, sales: 8518000 },
              { year: 1994, efficiency: 28.3, sales: 8991000 },
              { year: 1995, efficiency: 28.6, sales: 8620000 },
            ]}
          />
        </div>
      </Card>
      <Card type="outlined">
        <h2 className={TitleStyle.title}>Balance sheet</h2>
        <div>
          <Selection getInterval={getBalance} className="rounded-md">
            <option value="weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </Selection>
          <BarChart data={[1, 2, 3]} />
        </div>
      </Card>
    </section>
  );
}
