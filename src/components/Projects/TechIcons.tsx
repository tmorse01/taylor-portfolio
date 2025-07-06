import React from "react";
import TechIcon from "./TechIcon";

interface TechStackProps {
  technologies: string[];
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({
  technologies,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => (
        <TechIcon key={index} name={tech} />
      ))}
    </div>
  );
};

export default TechStack;
