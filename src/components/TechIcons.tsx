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
  faDocker,
  faBootstrap,
  faSass,
  faNpm,
  faYarn,
  faStripe,
  faLinux,
  faDigitalOcean,
  faSlack,
  faGithubAlt,
  faJira,
} from "@fortawesome/free-brands-svg-icons";
// Import custom SVG logos
import TypeScriptLogo from "../assets/logos/typescript.svg";
import ExpressLogo from "../assets/logos/express.svg";
import NextJSLogo from "../assets/logos/nextjs.svg";
import TailwindLogo from "../assets/logos/tailwind.svg";
// Import the SVGIcon component
import SVGIcon from "./SVGIcon";

export interface TechIconsProps {
  size?: "small" | "medium" | "large";
}

const TechIcons = ({ size = "medium" }: TechIconsProps) => {
  // Define size classes based on the size prop
  // Helper function to align icon and container sizes based on font-size
  const getSizeClass = () => {
    // text-3xl = 1.875rem (30px)
    // text-5xl = 3rem (48px)
    // text-6xl = 3.75rem (60px)

    switch (size) {
      case "small":
        return {
          icon: "text-3xl", // ~30px
          iconContainer: "w-8 h-8", // 32px container for the icon
          container: "w-8 h-8", // Same size for SVG images
        };
      case "large":
        return {
          icon: "text-6xl", // ~60px
          iconContainer: "w-16 h-16", // 64px container for the icon
          container: "w-16 h-16", // Same size for SVG images
        };
      case "medium":
      default:
        return {
          icon: "text-5xl", // ~48px
          iconContainer: "w-12 h-12", // 48px container for the icon
          container: "w-12 h-12", // Same size for SVG images
        };
    }
  };

  const sizeClass = getSizeClass();

  return [
    // Peripheral technologies (less important) at start
    <div
      key="mongodb"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faEnvira}
        className={`${sizeClass.icon} text-green-500`}
      />
    </div>,
    <div
      key="java"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faJava}
        className={`${sizeClass.icon} text-orange-300`}
      />
    </div>,
    <div
      key="azure"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faMicrosoft}
        className={`${sizeClass.icon} text-blue-500`}
      />
    </div>,
    <div
      key="aws"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faAws}
        className={`${sizeClass.icon} text-yellow-600`}
      />
    </div>,
    <div
      key="python"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faPython}
        className={`${sizeClass.icon} text-blue-300`}
      />
    </div>,
    <div
      key="docker"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faDocker}
        className={`${sizeClass.icon} text-blue-600`}
      />
    </div>,
    <div
      key="linux"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faLinux}
        className={`${sizeClass.icon} text-gray-700`}
      />
    </div>,
    <div
      key="digitalocean"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faDigitalOcean}
        className={`${sizeClass.icon} text-blue-300`}
      />
    </div>,

    // Secondary important technologies
    <div
      key="git"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faGitAlt}
        className={`${sizeClass.icon} text-orange-600`}
      />
    </div>,
    <div
      key="github"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faGithub}
        className={`${sizeClass.icon} text-gray-600`}
      />
    </div>,
    <div
      key="bootstrap"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faBootstrap}
        className={`${sizeClass.icon} text-purple-500`}
      />
    </div>,
    <div
      key="sass"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faSass}
        className={`${sizeClass.icon} text-pink-500`}
      />
    </div>,

    // Most important technologies in the center
    <div
      key="html"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faHtml5}
        className={`${sizeClass.icon} text-orange-500`}
      />
    </div>,
    <div
      key="css"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faCss3Alt}
        className={`${sizeClass.icon} text-blue-500`}
      />
    </div>,
    <div
      key="js"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faJs}
        className={`${sizeClass.icon} text-yellow-400`}
      />
    </div>,
    <div
      key="ts"
      className={`${sizeClass.container} flex items-center justify-center`}
    >
      <SVGIcon
        src={TypeScriptLogo}
        alt="TypeScript"
        className="w-full h-full"
      />
    </div>,
    <div
      key="react"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faReact}
        className={`${sizeClass.icon} text-blue-400`}
      />
    </div>,
    <div
      key="node"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faNodeJs}
        className={`${sizeClass.icon} text-green-600`}
      />
    </div>,
    <div
      key="nextjs"
      className={`${sizeClass.container} flex items-center justify-center`}
    >
      <SVGIcon src={NextJSLogo} alt="Next.js" className="w-full h-full" />
    </div>,
    <div
      key="express"
      className={`${sizeClass.container} flex items-center justify-center`}
    >
      <SVGIcon src={ExpressLogo} alt="Express.js" className="w-full h-full" />
    </div>,
    <div
      key="tailwind"
      className={`${sizeClass.container} flex items-center justify-center`}
    >
      <SVGIcon src={TailwindLogo} alt="TailwindCSS" className="w-full h-full" />
    </div>,

    // Secondary technologies and tools
    <div
      key="npm"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faNpm}
        className={`${sizeClass.icon} text-red-600`}
      />
    </div>,
    <div
      key="yarn"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faYarn}
        className={`${sizeClass.icon} text-blue-400`}
      />
    </div>,
    <div
      key="jira"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faJira}
        className={`${sizeClass.icon} text-blue-700`}
      />
    </div>,
    <div
      key="slack"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faSlack}
        className={`${sizeClass.icon} text-yellow-500`}
      />
    </div>,
    <div
      key="stripe"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faStripe}
        className={`${sizeClass.icon} text-purple-600`}
      />
    </div>,
    <div
      key="github-alt"
      className={`${sizeClass.iconContainer} flex items-center justify-center`}
    >
      <FontAwesomeIcon
        icon={faGithubAlt}
        className={`${sizeClass.icon} text-gray-500`}
      />
    </div>,
  ];
};

export default TechIcons;
