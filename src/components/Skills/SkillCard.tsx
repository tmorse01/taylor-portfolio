import React from "react";
import { SkillData } from "./skillsData";

interface SkillCardProps extends SkillData {
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-neutral-800 hover:scale-105 hover:-translate-y-2">
      <div className="mb-4 text-5xl text-cyan-500">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
