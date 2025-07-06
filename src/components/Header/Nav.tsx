import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="flex gap-4 ml-auto sm:gap-6">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="text-base font-medium hover:underline underline-offset-4"
      >
        About
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="text-base font-medium hover:underline underline-offset-4"
      >
        Skills
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        className="text-base font-medium hover:underline underline-offset-4"
      >
        Experience
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="text-base font-medium hover:underline underline-offset-4"
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="text-base font-medium hover:underline underline-offset-4"
      >
        Contact
      </Link>
    </nav>
  );
}
