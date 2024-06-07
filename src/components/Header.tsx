import { Link } from "react-scroll";
import CodeIcon from "./CodeIcon";

const Header = () => {
  return (
    <header className="flex items-center px-4 bg-gradient-to-r from-blue-500 to-purple-600 lg:px-6 h-14">
      <a href="#" className="flex items-center justify-center">
        <CodeIcon className="w-6 h-6" />
        <span className="sr-only">Portfolio</span>
      </a>
      <nav className="flex gap-4 ml-auto sm:gap-6">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Skills
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Experience
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Education
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
