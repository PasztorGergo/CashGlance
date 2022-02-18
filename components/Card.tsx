import React, { ReactChildren, ReactElement } from "react";
import CardStyles from "../styles/Card.module.css";
type type = "outlined" | "elevated";
type elevation = "lg" | "md" | "sm";

type Props = {
  type: type;
  elevation?: elevation;
  children: Array<ReactElement> | ReactElement;
  className?: string;
  rounded: boolean;
};

export default function Card({
  type,
  elevation,
  children,
  className,
  rounded,
}: Props) {
  return (
    <div
      className={`${elevation ?? elevation} ${CardStyles[type]}  ${
        className ?? ""
      } ${rounded && "rounded"}`}
    >
      {children}
    </div>
  );
}
