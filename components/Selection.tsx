import React, { ReactChildren, ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";

type Props = {
  children: Array<ReactElement>;
  getInterval: any;
};

export default function Selection({ children, getInterval }: Props) {
  const { register, watch } = useForm();
  const intervalWatch = watch("interval");

  useEffect(() => {
    getInterval(intervalWatch);
  }, [intervalWatch]);

  return (
    <select {...register("interval")} defaultValue="Monthly">
      {children}
    </select>
  );
}
