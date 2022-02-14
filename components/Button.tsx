import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import buttonStyles from "../styles/Button.module.css";

type theme = "success" | "error" | "warning";
type Props = {
  theme: theme;
  children: string;
  onClick?: any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className: string;
};

export default function Button({
  theme,
  children,
  onClick,
  disabled,
  type,
  className,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${buttonStyles[theme]} px-4 py-2 rounded-md text-white uppercase font-bold text-sm ${className}`}
    >
      {children}
    </button>
  );
}
