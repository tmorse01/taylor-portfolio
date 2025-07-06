// Import animation components
import { useEffect, useRef } from "react";

// Import local components and helpers
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";
import { setupSkillCardAnimations } from "./animationHelpers";
import { SectionHeader } from "../Shared";

const Skills = () => {
  // Reference to the skills grid container for staggered animations
  const skillsGridRef = useRef<HTMLDivElement>(null);

  // Setup staggered animations for skill cards
  useEffect(() => {
    // Using our refactored animation helper
    const cleanup = setupSkillCardAnimations(skillsGridRef, ".skill-card");

    return cleanup;
  }, []);

  return (
    <section
      id="skills"
      className="py-12 bg-gray-200 dark:bg-gray-900 md:py-24 lg:py-32"
    >
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <SectionHeader
          title="My Skills"
          description="I have a wide range of skills in web development, including React, Typescript, Node.js, Java, and more."
          useShinyText={true}
          size="large"
          fadeProps={{ duration: 800, threshold: 0.2 }}
        />

        <div
          ref={skillsGridRef}
          className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3"
        >
          {skillsData.map((skill) => (
            <div key={skill.title} className="skill-card">
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
