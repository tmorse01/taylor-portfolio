// Import animation components
import ScrollReveal from "../../blocks/TextAnimations/ScrollReveal/ScrollReveal";
import { useEffect, useRef } from "react";

// Import local components and helpers
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";
import { setupSkillCardAnimations } from "./animationHelpers";

const Skills = () => {
  // Reference to the skills grid container for staggered animations
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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
        <div ref={headingRef}>
          <ScrollReveal
            containerClassName="w-full"
            textClassName="text-center"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={3}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Skills
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a wide range of skills in web development, including
                  React, Typescript, Node.js, Java, and more.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

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
