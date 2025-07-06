import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import SVGIcon from "../Shared/SVGIcon";
import { techIconMap } from "../../utils/techIconsMap";

export interface TechIconsProps {
  size?: "small" | "medium" | "large";
}

/**
 * TechIcons Component
 * Returns an array of tech icon elements to be used in the GridMotionBackground
 */
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
  const techIconElements = [];

  // Add elements for each tech in the map
  for (const [name, techInfo] of Object.entries(techIconMap)) {
    if (techInfo.isSVG) {
      techIconElements.push(
        <div
          key={name.toLowerCase()}
          className={`${sizeClass.container} flex items-center justify-center`}
        >
          <SVGIcon
            src={techInfo.icon as string}
            alt={name}
            className="w-full h-full p-2"
          />
        </div>
      );
    } else {
      techIconElements.push(
        <div
          key={name.toLowerCase()}
          className={`${sizeClass.iconContainer} flex items-center justify-center`}
        >
          <FontAwesomeIcon
            icon={techInfo.icon as IconDefinition}
            className={`${sizeClass.icon} ${techInfo.color}`}
          />
        </div>
      );
    }
  }

  return techIconElements;
};

export default TechIcons;
