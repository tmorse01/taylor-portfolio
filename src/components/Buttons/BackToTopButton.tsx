import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ghostButtonStyles } from "./buttonStyles";

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

  const positionStyles = "fixed bottom-6 right-6 z-50";
  const buttonDimensions = "w-10 h-10 flex items-center justify-center";

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Link
        to="top"
        smooth={true}
        duration={500}
        className={`${positionStyles} ${ghostButtonStyles} ${buttonDimensions} rounded-full`}
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default BackToTopButton;
