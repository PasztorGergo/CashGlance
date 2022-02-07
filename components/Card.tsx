import React, { ReactChildren, ReactElement } from "react";
import CardStyles from "../styles/Card.module.css";
type type = "outlined" | "elevated";
type elevation = "lg" | "md" | "sm";

type Props = {
  type: type;
  elevation?: elevation;
  children: Array<string | ReactChildren | ReactElement>;
};

export default function Card({ type, elevation, children }: Props) {
  return (
    <div
      className={`${CardStyles[type]} ${
        elevation ?? CardStyles[elevation as any]
      }`}
    >
      {children}
    </div>
  );
}
