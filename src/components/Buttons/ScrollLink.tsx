import React, { FC } from "react";
import { Link as ScrollLink, LinkProps } from "react-scroll";
import { ButtonVariant, getButtonClassName } from "./buttonStyles";

interface ScrollLinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const ScrollLinkButton: FC<ScrollLinkButtonProps> = ({
  variant = "default",
  children,
  to = "#",
  className = "",
  role = "button",
  ...props
}) => {
  return (
    /* @ts-expect-error - react-scroll type mismatch*/
    <ScrollLink
      to={to}
      className={getButtonClassName(variant, className)}
      role={role}
      {...props}
    >
      {children}
    </ScrollLink>
  );
};

export default ScrollLinkButton;
