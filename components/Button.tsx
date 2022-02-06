import React, { MouseEventHandler } from "react";
import buttonStyles from "../styles/Button.module.css";

type theme = "success" | "error" | "warning";
type Props = {
  theme: theme;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function Button({ theme, children, onClick, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${buttonStyles[theme]} px-4 py-2 rounded-md text-white uppercase font-bold text-sm`}
    >
      {children}
    </button>
  );
}
