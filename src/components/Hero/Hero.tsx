import { LinkButton, ScrollLinkButton } from "../Buttons";
import { SplitText, FadeIn } from "../../blocks/TextAnimations";
import TiltedCard from "../../blocks/Components/TiltedCard/TiltedCard";
import GridMotionBackground from "./GridMotionBackground";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex items-center min-h-screen py-12 md:py-24 lg:py-32"
    >
      {/* GridMotion Background */}
      <GridMotionBackground
        gradientColor="rgba(0, 0, 0, 0.7)"
        iconSize="medium"
      />

      <div className="container relative z-10 px-4 mx-auto space-y-12 md:px-6 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div className="grid gap-4">
            {/* Glass Blue Container for Text */}
            <div className="p-6 border shadow-lg md:p-8 rounded-xl bg-blue-800/20 backdrop-blur-md border-blue-300/20">
              <div className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                <SplitText
                  text="Hi, I'm Taylor Morse"
                  splitType="words"
                  duration={0.8}
                  delay={50}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </div>
              <div className="mx-auto max-w-[700px] text-xl md:text-2xl mt-4">
                <FadeIn delay={300} duration={1200}>
                  <p className="mb-4">
                    Senior full stack developer specializing in React and
                    TypeScript, with a passion for building high-impact tools in
                    finance, real estate, and enterprise software.
                  </p>
                </FadeIn>

                <FadeIn delay={800} duration={1200}>
                  <p>
                    I combine clean design, performance-focused architecture,
                    and strong communication to deliver user-friendly, scalable
                    applications that solve real business problems.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-8">
            <div className="w-64 h-64">
              <TiltedCard
                imageSrc="/my-photo.jpg"
                altText="Taylor Morse profile photo"
                captionText="Taylor Morse"
                containerHeight="250px"
                containerWidth="250px"
                imageHeight="250px"
                imageWidth="250px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>
            <div className="flex flex-col items-start space-y-4">
              <LinkButton
                primary
                href="/TaylorMorseResume.pdf"
                target="_blank"
                className="px-8 py-4 text-xl h-[52px] lg:px-12 lg:py-6 lg:text-2xl lg:h-[68px]"
              >
                View Resume
              </LinkButton>
              <ScrollLinkButton
                basic
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-4 text-xl h-[52px] lg:px-12 lg:py-6 lg:text-2xl lg:h-[68px]"
              >
                Contact Me
              </ScrollLinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
