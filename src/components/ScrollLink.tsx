import React, { FC } from "react";
import { Link as ScrollLink, LinkProps } from "react-scroll";
import { baseStyles, getButtonStyles } from "./buttonStyles";

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
  const linkStyles = getButtonStyles(primary, basic);

  return (
    /* @ts-expect-error - react-scroll type mismatch*/
    <ScrollLink to={to} className={`${baseStyles} ${linkStyles}`} {...props}>
      {children}
    </ScrollLink>
  );
};

export default ScrollLinkButton;
