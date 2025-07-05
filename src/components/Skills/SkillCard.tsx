import React from "react";
import SpotlightCard from "../../blocks/Components/SpotlightCard/SpotlightCard";
import { SkillData } from "./skillsData";

interface SkillCardProps extends SkillData {
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, description }) => {
  return (
    <SpotlightCard
      className="grid gap-2 p-4 transition-transform duration-300 transform hover:scale-105"
      spotlightColor="rgba(255, 255, 255, 0.2)"
    >
      <h3 className="text-lg font-bold">{title}</h3>
      {icon}
      <p className="text-sm">{description}</p>
    </SpotlightCard>
  );
};

export default SkillCard;
