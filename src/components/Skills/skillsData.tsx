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
    "Senior-level React developer building complex, performant web applications including multi-app Vite setups, advanced component architecture, reusable core packages, and real-world UI patterns such as stepped forms, Kanban boards, and pricing engines."
  ),
  createSkillWithTechIcon(
    "TypeScript",
    "TypeScript",
    "Proficient in TypeScript, writing strongly typed, clean, maintainable codebases for large-scale React projects, reusable component libraries, and Node.js services while leveraging advanced generics and type-safe APIs."
  ),
  createSkillWithTechIcon(
    "CSS",
    "CSS",
    "Expert in modern CSS using Tailwind, CSS modules, and component library theming; implements responsive layouts, theming systems, and design consistency across React applications."
  ),
  createSkillWithTechIcon(
    "HTML",
    "HTML",
    "Uses semantic HTML and accessibility best practices while structuring React applications for SEO, screen readers, and clean markup structure."
  ),
  createSkillWithTechIcon(
    "Node.js",
    "Node.js",
    "Developed fast, scalable APIs using Node.js with Express server integrations, including structured service/controller patterns, hand rolled authentication, and transactional workflows for financial applications."
  ),
  createSkillWithTechIcon(
    "C#",
    "C#",
    "Experienced with C# and .NET, including using Entity Framework for efficient data modeling, managing complex relationships, writing LINQ queries, and handling server-side business logic for loan and invoice systems."
  ),
  createSkillWithTechIcon(
    "Java",
    "Java",
    "Created a large-scale reusable Java API using a standardized POST request pattern with parameters for schema, table, filtering, and sorting, enabling flexible data access across multiple systems while implementing efficient server architecture."
  ),
  createSkillWithTechIcon(
    "Python",
    "Python",
    "Built custom agentic AI backends with Python, implementing ML models and AI systems with custom-defined actions and integrating specialized document datasets for context-aware responses. Applied machine learning techniques for data analysis while also utilizing Python for automation scripts, data parsing, and ETL-like workflows to support internal tooling needs."
  ),
  createSkillWithTechIcon(
    "SQL",
    "SQL",
    "Experienced crafting advanced SQL queries and stored procedures for reporting, data validation, and relational data modeling; has optimized and debugged queries in MS SQL Server for large financial datasets."
  ),
  createSkillWithTechIcon(
    "MongoDB",
    "MongoDB",
    "Built REST APIs using MongoDB as a NoSQL data store for flexible, fast development, including designing schemas, managing indexes, and structuring efficient queries for data-heavy React apps."
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
      "Implemented comprehensive cloud solutions in Azure and AWS, including request tracing for distributed systems, log analytics for production monitoring, serverless functions for event-driven architectures, managed database services, and CI/CD pipelines with automated testing. Experienced in cloud resource optimization, security configurations, and efficient deployment strategies for React and Node.js applications.",
  },
  createSkillWithTechIcon(
    "Git",
    "Git",
    "Expert in Git workflows including feature branching, interactive rebasing, and maintaining clean commit histories. Led peer code reviews to enhance code quality and knowledge sharing, implemented comprehensive PR templates and review standards, resolved complex merge conflicts, and managed Azure DevOps CI/CD pipelines for automated quality checks and deployments across multiple environments."
  ),
];
