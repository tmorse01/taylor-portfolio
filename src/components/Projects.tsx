import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Projects
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              I have a strong educational background in computer science and web
              development.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <ProjectCard
            title="Shadowrun FPS"
            description="Created a web application that allowed users to create and join ranked games of Shadowrun, an old school FPS game."
            technologies={[
              "Next.js",
              "MongoDB",
              "TailwindCSS",
              "ShadcnUI",
              "NextAuth",
            ]}
            liveLink="https://www.shadowrunfps.com/"
            githubLinks={["https://github.com/Shadowrun-FPS/shadowrun-fps"]}
          />
          <ProjectCard
            title="Formbox"
            description="Created an application that enabled users to build dynamic forms, share a link to collect responses, then view responses."
            technologies={[
              "React",
              "Node.js",
              "MongoDB",
              "React Router",
              "Refresh Token Auth",
            ]}
            liveLink="https://formboxapp.com/"
            githubLinks={[
              "https://github.com/tmorse01/formbox",
              "https://github.com/tmorse01/formboxserver",
            ]}
          />
          <ProjectCard
            title="Mob Unity"
            description="Created an application for facilitating collaboration between
                developers using a process known as mob development."
            technologies={["Next.js", "MongoDB", "TailwindCSS", "DaisyUI"]}
            liveLink="https://mob-unity.vercel.app/"
            githubLinks={["https://github.com/tmorse01/mob-unity"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
