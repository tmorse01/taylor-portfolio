import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const baseStyles =
  "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg shadow h-9 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50";

const primaryStyles =
  "text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus-visible:ring-purple-600";

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
    <div>
      {isVisible && (
        <Link
          to="top"
          smooth={true}
          duration={500}
          className={`${baseStyles} ${primaryStyles} fixed bottom-4 right-4`}
        >
          Back to Top
        </Link>
      )}
    </div>
  );
};

export default BackToTopButton;
