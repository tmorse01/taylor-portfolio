import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  getTechIconInfo,
  getColorWithoutPrefix,
} from "../../utils/techIconsMap";

// Import the SVGIcon component
import SVGIcon from "../SVGIcon";

interface TechIconProps {
  name: string;
  size?: "small" | "medium" | "large";
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = "small" }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Get the tech icon info from our shared utility
  const techInfo = getTechIconInfo(name);

  // Define size classes based on the size prop
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          container: "w-8 h-8",
          svg: "w-5 h-5",
          icon: "text-xl",
        };
      case "medium":
        return {
          container: "w-12 h-12",
          svg: "w-8 h-8",
          icon: "text-3xl",
        };
      case "large":
        return {
          container: "w-16 h-16",
          svg: "w-12 h-12",
          icon: "text-5xl",
        };
      default:
        return {
          container: "w-8 h-8",
          svg: "w-5 h-5",
          icon: "text-xl",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={`flex items-center justify-center ${sizeClasses.container} transition-transform duration-300 transform group-hover:scale-110`}
      >
        {techInfo.isSVG ? (
          <SVGIcon
            src={techInfo.icon as string}
            alt={name}
            className={sizeClasses.svg}
            color={getColorWithoutPrefix(techInfo.color)}
          />
        ) : (
          <FontAwesomeIcon
            icon={techInfo.icon as IconDefinition}
            className={`${sizeClasses.icon} ${techInfo.color}`}
          />
        )}
      </div>

      {showTooltip && (
        <div className="absolute px-2 py-1 text-xs font-medium text-white transform -translate-x-1/2 -translate-y-1 bg-blue-900 border border-blue-700 rounded-md pointer-events-none shadow-glow bottom-full left-1/2 whitespace-nowrap">
          {name}
          <div className="absolute transform -translate-x-1/2 border-4 border-transparent top-full left-1/2 border-t-blue-900"></div>
        </div>
      )}
    </div>
  );
};

export default TechIcon;
