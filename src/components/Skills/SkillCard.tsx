import React, { useState } from "react";
import { SkillData } from "./skillsData";

interface SkillCardProps extends SkillData {
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle the toggle of expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Calculate if the description should be truncated
  const maxLength = 100; // Adjust this value to control when truncation occurs
  const shouldTruncate = description.length > maxLength && !isExpanded;
  const displayText = shouldTruncate
    ? `${description.substring(0, maxLength)}...`
    : description;

  return (
    <div
      className={`flex flex-col items-center w-full p-6 text-center transition-all duration-300 transform border rounded-lg shadow-lg bg-blue-600/20 backdrop-blur-md border-blue-300/20 hover:scale-105 hover:-translate-y-2 ${
        isExpanded ? "" : "h-72"
      }`}
    >
      <div className="mb-4 text-5xl text-cyan-400">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <div
        className={`flex-1 text-base text-gray-200 relative ${
          isExpanded ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        <div className="cursor-pointer" onClick={toggleExpanded}>
          {displayText}
        </div>
        {shouldTruncate && (
          <span
            className="block mt-2 text-sm cursor-pointer text-cyan-400 hover:underline"
            onClick={toggleExpanded}
          >
            Read more
          </span>
        )}
        {isExpanded && (
          <span
            className="block mt-2 text-sm cursor-pointer text-cyan-400 hover:underline"
            onClick={toggleExpanded}
          >
            Show less
          </span>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
