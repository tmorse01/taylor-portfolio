import { AnchorHTMLAttributes, FC } from "react";
import { ButtonVariant, getButtonClassName } from "./buttonStyles";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  icon?: JSX.Element;
  className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  variant = "default",
  icon,
  children,
  className = "",
  role = "button",
  ...props
}) => {
  return (
    <a
      className={getButtonClassName(variant, className)}
      role={role}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
};

export default LinkButton;
