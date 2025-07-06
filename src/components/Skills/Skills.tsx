// Import animation components
import { useEffect, useRef } from "react";

// Import local components and helpers
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";
import { setupSkillCardAnimations } from "./animationHelpers";
import { ShinyText } from "../../blocks/TextAnimations";

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
        <div ref={headingRef} className="space-y-4 text-center">
          <h3 className="mb-8 text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            My Skills
          </h3>

          <ShinyText
            className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            text=" I have a wide range of skills in web development, including React,
            Typescript, Node.js, Java, and more."
            speed={7}
          />
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
