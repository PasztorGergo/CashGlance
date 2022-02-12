import React, { useState } from "react";
import Button from "./Button";
import formStyles from "../styles/SignForm.module.css";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";

type Props = {
  financialFunction: any;
  type: string;
};

export default function FinancialForm({ financialFunction, type }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
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
            {...register("amount", { required: true, min: 0 })}
            type="number"
            className={formStyles.input}
            disabled={loading}
          />
        </label>
        <label htmlFor="Date" className={formStyles.label}>
          <span>Date</span>
          <input
            {...register("date", { required: true })}
            type="datetime-local"
            className={formStyles.input}
            disabled={loading}
          />
        </label>
        <Button theme="success" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}
