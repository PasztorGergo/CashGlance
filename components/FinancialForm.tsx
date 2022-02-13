import React, { useState } from "react";
import Button from "./Button";
import formStyles from "../styles/SignForm.module.css";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {
  financialFunction: any;
  type: string;
};

export default function FinancialForm({ financialFunction, type }: Props) {
  const schema = yup
    .object({
      amount: yup.number().positive().required(),
      date: yup.string().required(),
    })
    .required();
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  function onSubmit(data: any) {
    setLoading(true);

    toast
      .promise(financialFunction(data.amount, data.date), {
        loading: type == "expense" ? "Adding expense..." : "Adding income...",
        success: "Successfully added!",
        error: "Something went wrong!",
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className={formStyles.financialForm}>
      <h2 className={formStyles.title}>
        {type == "expense" ? "Add Expneses" : "Add Incomes"}
      </h2>
      <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Amount" className={formStyles.label}>
          <span>Amount</span>
          <input
            {...register("amount", {
              disabled: loading,
            })}
            type="number"
            className={formStyles.input}
          />
        </label>
        <label htmlFor="Date" className={formStyles.label}>
          <span>Date</span>
          <input
            {...register("date", { disabled: loading })}
            type="datetime-local"
            className={formStyles.input}
            disabled={loading}
          />
        </label>
        <Button theme="success" type="submit" disabled={loading}>
          Add
        </Button>
      </form>
    </div>
  );
}
