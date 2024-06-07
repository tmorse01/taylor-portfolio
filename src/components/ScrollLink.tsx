import React, { FC } from "react";
import { Link as ScrollLink, LinkProps } from "react-scroll";

interface ScrollLinkButtonProps extends LinkProps {
  children: React.ReactNode;
  primary?: boolean;
  basic?: boolean;
}

const ScrollLinkButton: FC<ScrollLinkButtonProps> = ({
  primary,
  basic,
  children,
  to = "#",
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
    /* @ts-expect-error - react-scroll type mismatch*/
    <ScrollLink to={to} className={`${baseStyles} ${linkStyles}`} {...props}>
      {children}
    </ScrollLink>
  );
};

export default ScrollLinkButton;
