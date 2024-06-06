import Input from "./Input";
import CodeIcon from "./CodeIcon";
import { Link, animateScroll as scroll } from "react-scroll";
import TextArea from "./TextArea";
import Button from "./Button";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#1E293B] px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <CodeIcon className="w-6 h-6 text-white" />
          <span className="sr-only">Portfolio</span>
        </a>
        <nav className="flex gap-4 ml-auto sm:gap-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-sm font-medium text-white hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-sm font-medium text-white hover:underline underline-offset-4"
          >
            Skills
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-sm font-medium text-white hover:underline underline-offset-4"
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="text-sm font-medium text-white hover:underline underline-offset-4"
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-sm font-medium text-white hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="about"
          className="bg-[#0EA5E9] py-12 md:py-24 lg:py-32 text-white"
        >
          <div className="container px-4 space-y-10 md:px-6 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Hi, I'm Taylor Morse
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl ">
                  I'm a Full stack web developer with a passion for building
                  enterprise web applications.
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
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#0284C7] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0369A1] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0EA5E9] disabled:pointer-events-none disabled:opacity-50"
                  >
                    Download CV
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-[#0EA5E9] bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0EA5E9]/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0EA5E9] disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="bg-[#4338CA] py-12 md:py-24 lg:py-32 text-white"
        >
          <div className="container px-4 space-y-12 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Skills
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  I have a wide range of skills in web development, including
                  React, Typescript, Node.js, C#, and more.
                </p>
              </div>
            </div>
            <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">React</h3>
                <p className="text-sm text-gray-200 ">
                  Proficient in building complex, scalable, and responsive React
                  applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">JavaScript</h3>
                <p className="text-sm text-gray-200 ">
                  Experienced in writing clean, efficient, and maintainable
                  JavaScript code.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">CSS</h3>
                <p className="text-sm text-gray-200 ">
                  Skilled in creating visually appealing and responsive designs
                  using CSS.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">TypeScript</h3>
                <p className="text-sm text-gray-200 ">
                  Experienced in using TypeScript to build scalable and
                  maintainable applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Git</h3>
                <p className="text-sm text-gray-200 ">
                  Proficient in using Git for version control and collaboration.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Responsive Design</h3>
                <p className="text-sm text-gray-200 ">
                  Skilled in creating responsive and mobile-friendly web
                  applications.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="bg-[#10B981] py-12 md:py-24 lg:py-32 text-white"
        >
          <div className="container px-4 space-y-12 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Experience
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  I have worked on a variety of projects, ranging from small
                  startups to large enterprises.
                </p>
              </div>
            </div>
            <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">React Developer</h3>
                <p className="text-sm text-gray-200 ">
                  Developed and maintained a complex web application for a
                  leading e-commerce company.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Front-end Engineer</h3>
                <p className="text-sm text-gray-200 ">
                  Worked on a team to build a responsive and user-friendly
                  website for a startup.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">UI/UX Designer</h3>
                <p className="text-sm text-gray-200 ">
                  Designed and implemented the user interface for a mobile
                  application.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Full-stack Developer</h3>
                <p className="text-sm text-gray-200 ">
                  Collaborated with a team to build a web application with a
                  React front-end and a Node.js back-end.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Freelance Developer</h3>
                <p className="text-sm text-gray-200 ">
                  Worked on various projects for clients, including building
                  custom WordPress themes and plugins.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Internship</h3>
                <p className="text-sm text-gray-200 ">
                  Completed a 3-month internship at a software development
                  agency, where I gained valuable experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="education"
          className="bg-[#F472B6] py-12 md:py-24 lg:py-32 text-white"
        >
          <div className="container px-4 space-y-12 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Education
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  I have a strong educational background in computer science and
                  web development.
                </p>
              </div>
            </div>
            <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Bachelor's Degree</h3>
                <p className="text-sm text-gray-200 ">
                  Computer Science, University of California, Berkeley
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Online Courses</h3>
                <p className="text-sm text-gray-200 ">
                  Completed various online courses on React, JavaScript, and web
                  development.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Certifications</h3>
                <p className="text-sm text-gray-200 ">
                  Obtained certifications in React, JavaScript, and CSS from
                  reputable online platforms.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Bootcamp</h3>
                <p className="text-sm text-gray-200 ">
                  Attended a 12-week intensive web development bootcamp,
                  focusing on front-end technologies.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Workshops</h3>
                <p className="text-sm text-gray-200 ">
                  Participated in various workshops and meetups to stay
                  up-to-date with the latest front-end trends and technologies.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Self-learning</h3>
                <p className="text-sm text-gray-200 ">
                  Continuously learning and improving my skills through
                  self-directed study and personal projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-[#9333EA] py-12 md:py-24 lg:py-32 text-white"
        >
          <div className="container px-4 space-y-12 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Feel free to reach out to me if you have any questions or
                  would like to discuss a potential project.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto space-y-2">
              <form className="flex flex-col space-y-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <TextArea placeholder="Message" />
                <Button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
