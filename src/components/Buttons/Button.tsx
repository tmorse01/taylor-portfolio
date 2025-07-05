import { ButtonHTMLAttributes } from "react";
import { baseStyles, getButtonStyles } from "./buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  basic?: boolean;
}

export default function Button({
  primary,
  basic,
  children,
  ...props
}: ButtonProps) {
  const buttonStyles = getButtonStyles(primary, basic);

  return (
    <button className={`${baseStyles} ${buttonStyles}`} {...props}>
      {children}
    </button>
  );
}
