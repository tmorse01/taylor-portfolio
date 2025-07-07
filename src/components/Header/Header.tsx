import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import Nav from "./Nav";
import GlareHover from "../../blocks/Animations/GlareHover/GlareHover";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Initialize scroll state on component mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <GlareHover
      width="100%"
      height="64px"
      background="transparent"
      borderRadius="0"
      borderColor="transparent"
      glareColor="#ffffff"
      glareOpacity={0.1}
      glareSize={300}
      glareAngle={45}
      transitionDuration={1200}
      className="w-full"
      style={{ padding: 0, margin: 0, border: "none" }}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center px-4 lg:px-6 h-16
          transition-all duration-300 backdrop-blur-md w-full
          ${
            scrolled
              ? "bg-white/10 shadow-lg border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <a href="#" className="relative flex items-center justify-center group">
          <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-blue-400/20 blur-lg group-hover:opacity-100"></div>
          <FontAwesomeIcon
            icon={faCode}
            className="relative z-10 text-xl text-white transition-all duration-300 drop-shadow-glow"
          />
          <span className="sr-only">Portfolio</span>
        </a>
        <div className="ml-auto lg:hidden">
          <Dropdown
            items={[
              { text: "About", href: "about" },
              { text: "Skills", href: "skills" },
              { text: "Experience", href: "experience" },
              { text: "Projects", href: "projects" },
              { text: "Contact", href: "contact" },
            ]}
          />
        </div>
        <div className="hidden ml-auto lg:block">
          <Nav />
        </div>
      </header>
    </GlareHover>
  );
};

export default Header;
