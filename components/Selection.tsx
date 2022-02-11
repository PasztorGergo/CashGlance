import React, { ReactChildren, ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";

type Props = {
  children: Array<ReactElement>;
  getInterval: any;
  className: string;
};

export default function Selection({ children, getInterval, className }: Props) {
  const { register, watch } = useForm();
  const intervalWatch = watch("interval");

  useEffect(() => {
    getInterval(intervalWatch);
  }, [intervalWatch]);

  return (
    <select
      {...register("interval")}
      defaultValue="monthly"
      className={className}
    >
      {children}
    </select>
  );
}
