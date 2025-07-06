import React from "react";
import FadeContent from "../../blocks/Animations/FadeContent/FadeContent";
import { ShinyText } from "../../blocks/TextAnimations";

interface SectionHeaderProps {
  title: string;
  description?: string;
  size?: "default" | "large";
  useShinyText?: boolean;
  shinyTextSpeed?: number;
  className?: string;
  fadeProps?: {
    duration?: number;
    threshold?: number;
    delay?: number;
    blur?: boolean;
  };
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  size = "default",
  useShinyText = false,
  shinyTextSpeed = 7,
  className = "",
  fadeProps = {
    duration: 800,
    threshold: 0.2,
    delay: 0,
    blur: false,
  },
}) => {
  // Determine heading class based on size
  const headingClass =
    size === "large"
      ? "mb-8 text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl"
      : "text-3xl font-bold tracking-tighter sm:text-5xl";

  // Determine description class based on size
  const descriptionClass =
    size === "large"
      ? "max-w-[900px] md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed"
      : "max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed";

  return (
    <FadeContent
      duration={fadeProps.duration}
      threshold={fadeProps.threshold}
      delay={fadeProps.delay}
      blur={fadeProps.blur}
      className={className}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className={headingClass}>{title}</h2>
          {description && useShinyText ? (
            <ShinyText
              className={descriptionClass}
              text={description}
              speed={shinyTextSpeed}
            />
          ) : (
            description && <p className={descriptionClass}>{description}</p>
          )}
        </div>
      </div>
    </FadeContent>
  );
};

export default SectionHeader;
