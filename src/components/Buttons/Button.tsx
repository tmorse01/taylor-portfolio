import { ButtonHTMLAttributes } from "react";
import { ButtonVariant, getButtonClassName } from "./buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={getButtonClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}
