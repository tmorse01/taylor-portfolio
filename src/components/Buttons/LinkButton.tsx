import { AnchorHTMLAttributes, FC } from "react";
import { baseStyles, getButtonStyles } from "./buttonStyles";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean;
  basic?: boolean;
  icon?: JSX.Element;
}

const LinkButton: FC<LinkButtonProps> = ({
  primary,
  basic,
  icon,
  children,
  ...props
}) => {
  const linkStyles = getButtonStyles(primary, basic);

  return (
    <a className={`${baseStyles} ${linkStyles}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
};

export default LinkButton;
