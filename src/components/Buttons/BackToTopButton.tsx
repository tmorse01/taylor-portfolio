import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ScrollLinkButton from "./ScrollLink";

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

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ScrollLinkButton
        variant="ghost"
        to="top"
        smooth={true}
        duration={500}
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full p-0"
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
      </ScrollLinkButton>
    </div>
  );
};

export default BackToTopButton;
