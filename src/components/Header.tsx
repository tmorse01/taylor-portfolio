import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex items-center px-4 bg-gradient-to-r from-blue-500 to-purple-600 lg:px-6 h-14">
      <a href="#" className="flex items-center justify-center">
        <FontAwesomeIcon icon={faCode} />
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
  );
};

export default Header;
