import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { baseStyles, primaryStyles } from "./buttonStyles";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const positionStyles = "fixed bottom-4 right-4";

  return (
    <div>
      {isVisible && (
        <Link
          to="top"
          smooth={true}
          duration={500}
          className={`${baseStyles} ${primaryStyles} ${positionStyles}`}
        >
          Back to Top
        </Link>
      )}
    </div>
  );
};

export default BackToTopButton;
