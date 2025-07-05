import LinkButton from "./LinkButton";
import ScrollLinkButton from "./ScrollLink";
import SplitText from "../animations/SplitText/SplitText";
import ShinyText from "../animations/ShinyText/ShinyText";

const Hero = () => {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto space-y-12 md:px-6 xl:space-y-16">
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
            <div className="mx-auto max-w-[700px] md:text-xl">
              <ShinyText
                text="I'm a full stack web developer passionate about creating efficient, maintainable, and user-friendly web applications."
                speed={7}
              />
            </div>
            <div className="mx-auto max-w-[700px] md:text-xl">
              <ShinyText
                text="I enjoy tackling complex problems and automating business processes."
                speed={6}
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/my-photo.jpg"
              width="300"
              height="300"
              alt="Profile"
              className="object-cover w-40 h-40 rounded-full"
            />
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
