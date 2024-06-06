import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="about"
      className="py-12 text-white bg-gradient-to-r from-[#10B981] to-[#22D3EE] md:py-24 lg:py-32"
    >
      <div className="container px-4 space-y-10 md:px-6 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Hi, I'm Taylor Morse
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl ">
              I'm a Full stack web developer passionate about creating
              efficient, maintainable, and user-friendly web applications. I
              enjoy tackling complex problems and automating business processes.
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
              <a
                href="/TaylorMorseResume.pdf"
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FBBF24] disabled:pointer-events-none disabled:opacity-50"
              >
                View Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#FBBF24]/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FBBF24] disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
