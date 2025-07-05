import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faGitAlt,
  faMicrosoft,
  faAws,
  faPython,
  faJava,
  faJsSquare,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SkillData {
  title: string;
  icon: React.ReactNode;
  description: string;
}

// Function to create skill data with icon
const createSkillWithIcon = (
  title: string,
  icon: IconDefinition,
  description: string
): SkillData => {
  return {
    title,
    icon: <FontAwesomeIcon icon={icon} size="3x" />,
    description,
  };
};

// Skills data
export const skillsData: SkillData[] = [
  createSkillWithIcon(
    "React",
    faReact,
    "Senior level React developer with experience in building complex web applcations."
  ),
  createSkillWithIcon(
    "TypeScript",
    faJsSquare,
    "Proficient in writing clean and maintainable code with TypeScript."
  ),
  createSkillWithIcon(
    "CSS",
    faCss3Alt,
    "Expert in styling with modern CSS techniques such as responsive design, theming, and tailwind."
  ),
  createSkillWithIcon(
    "HTML",
    faHtml5,
    "Understands the fundamentals of HTML and semantic markup."
  ),
  createSkillWithIcon(
    "Node.js",
    faNodeJs,
    "Experienced in standing up quick, fast and scalable server-side applications with Node.js."
  ),
  createSkillWithIcon(
    "C#",
    faLaptopCode,
    "Capable of using .NET Entity Framework for efficient data modeling and database interaction."
  ),
  createSkillWithIcon(
    "Java",
    faJava,
    "Skilled in creating and maintaining reliable servers with Java."
  ),
  createSkillWithIcon(
    "Python",
    faPython,
    "Versatile in writing efficient Python code for a variety of projects such as data analysis, web scraping, and automation."
  ),
  createSkillWithIcon(
    "SQL",
    faDatabase,
    "Knowledgable in crafting complex SQL queries and managing relational databases."
  ),
  createSkillWithIcon(
    "MongoDB",
    faEnvira,
    "Experienced using NoSQL databases with MongoDB for scalable and fast data storage."
  ),
  {
    title: "Azure / AWS",
    icon: (
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faMicrosoft} size="3x" />
        <FontAwesomeIcon icon={faAws} size="3x" />
      </div>
    ),
    description:
      "Familiarity using Azure and AWS platforms for devops and cloud computing.",
  },
  createSkillWithIcon(
    "Git",
    faGitAlt,
    "Excellent version control and team collaboration using Git."
  ),
];
