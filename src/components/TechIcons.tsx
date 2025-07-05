import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faAws,
  faGitAlt,
  faMicrosoft,
  faPython,
  faJava,
  faEnvira,
  faCss3Alt,
  faHtml5,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// Import custom SVG logos
import TypeScriptLogo from "../assets/logos/typescript.svg";
import ExpressLogo from "../assets/logos/express.svg";
import NextJSLogo from "../assets/logos/nextjs.svg";
import RestAPILogo from "../assets/logos/rest-api.svg";
import TailwindLogo from "../assets/logos/tailwind.svg";
// Import the SVGIcon component
import SVGIcon from "./SVGIcon";

export interface TechIconsProps {
  size?: "small" | "medium" | "large";
}

const TechIcons = ({ size = "medium" }: TechIconsProps) => {
  // Define size classes based on the size prop
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return {
          icon: "text-3xl",
          container: "w-6 h-6",
        };
      case "large":
        return {
          icon: "text-6xl",
          container: "w-12 h-12",
        };
      case "medium":
      default:
        return {
          icon: "text-5xl",
          container: "w-8 h-8",
        };
    }
  };

  const sizeClass = getSizeClass();

  // Define grid items for GridMotion using icons
  const techIcons = [
    <div key="react" className={`${sizeClass.icon} text-blue-400`}>
      <FontAwesomeIcon icon={faReact} />
    </div>,
    <div key="ts" className={sizeClass.container}>
      <SVGIcon
        src={TypeScriptLogo}
        alt="TypeScript"
        className="w-full h-full"
        color="#3178C6"
      />
    </div>,
    <div key="node" className={`${sizeClass.icon} text-green-600`}>
      <FontAwesomeIcon icon={faNodeJs} />
    </div>,
    <div key="github" className={`${sizeClass.icon} text-gray-600`}>
      <FontAwesomeIcon icon={faGithub} />
    </div>,
    <div key="js" className={`${sizeClass.icon} text-yellow-400`}>
      <FontAwesomeIcon icon={faJs} />
    </div>,
    <div key="express" className={`${sizeClass.container} w-auto`}>
      <SVGIcon
        src={ExpressLogo}
        alt="Express.js"
        className="w-full h-full"
        filter="brightness(125%) contrast(125%)"
        color="white"
      />
    </div>,
    <div key="mongodb" className={`${sizeClass.icon} text-green-500`}>
      <FontAwesomeIcon icon={faEnvira} />
    </div>,
    <div key="python" className={`${sizeClass.icon} text-blue-300`}>
      <FontAwesomeIcon icon={faPython} />
    </div>,
    <div key="java" className={`${sizeClass.icon} text-orange-300`}>
      <FontAwesomeIcon icon={faJava} />
    </div>,
    <div key="sql" className={`${sizeClass.icon} text-blue-500`}>
      <FontAwesomeIcon icon={faDatabase} />
    </div>,
    <div key="nextjs" className={sizeClass.container}>
      <SVGIcon
        src={NextJSLogo}
        alt="Next.js"
        className="w-full h-full"
        filter="brightness(150%) contrast(125%)"
        color="#000000"
      />
    </div>,
    <div key="aws" className={`${sizeClass.icon} text-yellow-600`}>
      <FontAwesomeIcon icon={faAws} />
    </div>,
    <div key="csharp" className={`${sizeClass.icon} text-purple-400`}>
      <FontAwesomeIcon icon={faLaptopCode} />
    </div>,
    <div key="tailwind" className={sizeClass.container}>
      <SVGIcon
        src={TailwindLogo}
        alt="TailwindCSS"
        className="w-full h-full"
        color="#38B2AC"
        filter="saturate(150%)"
      />
    </div>,
    <div key="git" className={`${sizeClass.icon} text-orange-600`}>
      <FontAwesomeIcon icon={faGitAlt} />
    </div>,
    <div key="azure" className={`${sizeClass.icon} text-blue-500`}>
      <FontAwesomeIcon icon={faMicrosoft} />
    </div>,
    <div key="rest-api" className={`${sizeClass.container} w-auto`}>
      <SVGIcon
        src={RestAPILogo}
        alt="REST API"
        className="w-full h-full"
        color="#FF6C37"
        filter="saturate(120%)"
      />
    </div>,
    <div key="html" className={`${sizeClass.icon} text-orange-500`}>
      <FontAwesomeIcon icon={faHtml5} />
    </div>,
    <div key="css" className={`${sizeClass.icon} text-blue-500`}>
      <FontAwesomeIcon icon={faCss3Alt} />
    </div>,
  ];

  return techIcons;
};

export default TechIcons;
