import { AnchorHTMLAttributes, FC } from "react";
import { baseStyles, getButtonStyles } from "./buttonStyles";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean;
  basic?: boolean;
  icon?: JSX.Element;
  className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  primary,
  basic,
  icon,
  children,
  className = "",
  ...props
}) => {
  const linkStyles = getButtonStyles(primary, basic);

  return (
    <a className={`${baseStyles} ${linkStyles} ${className}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
};

export default LinkButton;
