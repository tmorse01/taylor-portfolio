import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="flex gap-4 ml-auto sm:gap-6">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="relative px-3 py-1 font-medium text-white transition-all duration-300 group"
        activeClass="after:w-full text-blue-100"
      >
        <span className="relative z-10">About</span>
        <span className="absolute inset-0 transition-all duration-300 rounded-lg bg-white/0 group-hover:bg-white/10"></span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="relative px-3 py-1 font-medium text-white transition-all duration-300 group"
        activeClass="after:w-full text-blue-100"
      >
        <span className="relative z-10">Skills</span>
        <span className="absolute inset-0 transition-all duration-300 rounded-lg bg-white/0 group-hover:bg-white/10"></span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        className="relative px-3 py-1 font-medium text-white transition-all duration-300 group"
        activeClass="after:w-full text-blue-100"
      >
        <span className="relative z-10">Experience</span>
        <span className="absolute inset-0 transition-all duration-300 rounded-lg bg-white/0 group-hover:bg-white/10"></span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="relative px-3 py-1 font-medium text-white transition-all duration-300 group"
        activeClass="after:w-full text-blue-100"
      >
        <span className="relative z-10">Projects</span>
        <span className="absolute inset-0 transition-all duration-300 rounded-lg bg-white/0 group-hover:bg-white/10"></span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="relative px-3 py-1 font-medium text-white transition-all duration-300 group"
        activeClass="after:w-full text-blue-100"
      >
        <span className="relative z-10">Contact</span>
        <span className="absolute inset-0 transition-all duration-300 rounded-lg bg-white/0 group-hover:bg-white/10"></span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
      </Link>
    </nav>
  );
}
