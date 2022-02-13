import React, { ReactChildren, ReactElement } from "react";
import CardStyles from "../styles/Card.module.css";
type type = "outlined" | "elevated";
type elevation = "lg" | "md" | "sm";

type Props = {
  type: type;
  elevation?: elevation;
  children: Array<ReactElement> | ReactElement;
  className?: string;
};

export default function Card({ type, elevation, children, className }: Props) {
  return (
    <div
      className={`${CardStyles[type]} ${
        elevation ?? CardStyles[elevation as any]
      } ${className}`}
    >
      {children}
    </div>
  );
}
