import { LinkButton, ScrollLinkButton } from "./Buttons";
import { SplitText, ShinyText } from "../blocks/TextAnimations";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";
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
            <div className="mx-auto max-w-[700px] text-2xl md:text-3xl">
              <ShinyText
                text="I'm a full stack web developer passionate about creating efficient, maintainable, and user-friendly web applications."
                speed={7}
              />
            </div>
            <div className="mx-auto max-w-[700px] text-2xl md:text-3xl">
              <ShinyText
                text="I enjoy tackling complex problems and automating business processes."
                speed={6}
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-8">
            <div className="w-64 h-64 mb-4">
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
            <div className="space-x-4">
              <LinkButton primary href="/TaylorMorseResume.pdf" target="_blank">
                View Resume
              </LinkButton>
              <ScrollLinkButton basic to="contact" smooth={true} duration={500}>
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
