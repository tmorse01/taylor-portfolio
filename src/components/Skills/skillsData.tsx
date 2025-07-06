import React from "react";
import TechIcon from "../Projects/TechIcon";

export interface SkillData {
  title: string;
  icon: React.ReactNode;
  description: string;
}

// Function to create skill data with tech icon name
const createSkillWithTechIcon = (
  title: string,
  iconName: string,
  description: string
): SkillData => {
  return {
    title,
    icon: (
      <div className="flex justify-center">
        <TechIcon name={iconName} size="large" />
      </div>
    ),
    description,
  };
};

// Skills data
export const skillsData: SkillData[] = [
  createSkillWithTechIcon(
    "React",
    "React",
    "Senior level React developer with experience in building complex web applcations."
  ),
  createSkillWithTechIcon(
    "TypeScript",
    "TypeScript",
    "Proficient in writing clean and maintainable code with TypeScript."
  ),
  createSkillWithTechIcon(
    "CSS",
    "CSS",
    "Expert in styling with modern CSS techniques such as responsive design, theming, and tailwind."
  ),
  createSkillWithTechIcon(
    "HTML",
    "HTML",
    "Understands the fundamentals of HTML and semantic markup."
  ),
  createSkillWithTechIcon(
    "Node.js",
    "Node.js",
    "Experienced in standing up quick, fast and scalable server-side applications with Node.js."
  ),
  createSkillWithTechIcon(
    "C#",
    "C#",
    "Capable of using .NET Entity Framework for efficient data modeling and database interaction."
  ),
  createSkillWithTechIcon(
    "Java",
    "Java",
    "Skilled in creating and maintaining reliable servers with Java."
  ),
  createSkillWithTechIcon(
    "Python",
    "Python",
    "Versatile in writing efficient Python code for a variety of projects such as data analysis, web scraping, and automation."
  ),
  createSkillWithTechIcon(
    "SQL",
    "SQL",
    "Knowledgable in crafting complex SQL queries and managing relational databases."
  ),
  createSkillWithTechIcon(
    "MongoDB",
    "MongoDB",
    "Experienced using NoSQL databases with MongoDB for scalable and fast data storage."
  ),
  {
    title: "Azure / AWS",
    icon: (
      <div className="flex justify-center gap-4">
        <TechIcon name="Azure" size="large" />
        <TechIcon name="AWS" size="large" />
      </div>
    ),
    description:
      "Familiarity using Azure and AWS platforms for devops and cloud computing.",
  },
  createSkillWithTechIcon(
    "Git",
    "Git",
    "Excellent version control and team collaboration using Git."
  ),
];
