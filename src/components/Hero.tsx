import LinkButton from "./LinkButton";
import ScrollLinkButton from "./ScrollLink";

const Hero = () => {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto space-y-12 md:px-6 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div className="grid gap-4">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Hi, I'm Taylor Morse
            </h1>
            <p className="mx-auto max-w-[700px] md:text-xl">
              I'm a full stack web developer passionate about creating
              efficient, maintainable, and user-friendly web applications.
            </p>
            <p className="mx-auto max-w-[700px] md:text-xl">
              I enjoy tackling complex problems and automating business
              processes.
            </p>
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
