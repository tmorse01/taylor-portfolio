import { AnchorHTMLAttributes, FC } from "react";

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
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg shadow h-9 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50";

  const primaryStyles =
    "text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus-visible:ring-purple-600";
  const basicStyles =
    "text-blue-500 border-2 border-blue-500 hover:border-purple-600 hover:text-purple-600 focus-visible:ring-purple-600";

  const linkStyles = primary ? primaryStyles : basic ? basicStyles : "";

  return (
    <a className={`${baseStyles} ${linkStyles}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
};

export default LinkButton;
