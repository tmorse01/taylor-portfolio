import React from "react";
import { SkillData } from "./skillsData";

interface SkillCardProps extends SkillData {
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center w-full p-6 text-center transition-all duration-300 transform border rounded-lg shadow-lg bg-blue-600/20 backdrop-blur-md border-blue-300/20 hover:scale-105 hover:-translate-y-2 h-72">
      <div className="mb-4 text-5xl text-cyan-400">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <div className="flex-1 overflow-auto text-base text-gray-200">
        {description}
      </div>
    </div>
  );
};

export default SkillCard;
