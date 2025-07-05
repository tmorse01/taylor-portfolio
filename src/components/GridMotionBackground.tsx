import React from "react";
import GridMotion from "../blocks/Backgrounds/GridMotion/GridMotion";
import TechIcons, { TechIconsProps } from "./TechIcons";

interface GridMotionBackgroundProps {
  gradientColor?: string;
  iconSize?: TechIconsProps["size"];
}

const GridMotionBackground: React.FC<GridMotionBackgroundProps> = ({
  gradientColor = "rgba(0, 0, 0, 0.7)",
  iconSize = "medium",
}) => {
  // Get the tech icons array
  const techIconsArray = TechIcons({ size: iconSize });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <GridMotion items={techIconsArray} gradientColor={gradientColor} />
    </div>
  );
};

export default GridMotionBackground;
