import React, { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  children: Array<ReactElement>;
  getInterval: any;
  className?: string;
};

export default function Selection({ children, getInterval, className }: Props) {
  const { register } = useForm();
  const [limit, setLimit] = useState<number>(7);

  useEffect(() => {
    getInterval(limit);
  }, [limit]);

  return (
    <select
      {...register("interval")}
      className={className}
      onChange={(e) => setLimit(e.target.value as unknown as number)}
    >
      {children}
    </select>
  );
}
