import ProjectCard from "./ProjectCard";
import { ShinyText } from "../../blocks/TextAnimations";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="mb-8 text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              Projects
            </h3>
            <ShinyText
              className="max-w-[900px] md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed"
              text="Showcasing my expertise in modern web development with React, TypeScript, and full-stack technologies. These projects demonstrate my ability to create intuitive user experiences, implement complex data visualizations, and build scalable applications."
              speed={7}
            />
          </div>
        </div>
        <div className="grid items-stretch gap-10 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <ProjectCard
            title="Pitch Site"
            description="Developed a flashy, animated pitch deck generator that helps real estate investors create AI-powered, colorful presentations with step-by-step forms and shareable previews."
            technologies={[
              "React",
              "Vite",
              "TypeScript",
              "Mantine UI",
              "Node.js",
              "Express",
              "Railway",
            ]}
            liveLink="https://pitchsite-client-production.up.railway.app/share/lXYUaM"
            githubLinks={["https://github.com/tmorse01/pitchsite"]}
            videoUrl="/demos/PitchSite.mp4"
          />
          <ProjectCard
            title="Housing Market Trends"
            description="Created a web application that allows users to view and analyze housing market trends in the US."
            technologies={[
              "React",
              "HeadlessUI",
              "Recharts",
              "D3",
              "React-Query",
              "TailwindCSS",
            ]}
            liveLink="https://housing-market-trends.netlify.app/"
            githubLinks={["https://github.com/tmorse01/housing-visualizations"]}
          />
          <ProjectCard
            title="NW Builds"
            description="Created a web application to showcase builds from one of my favorite online MMORPG games, New World."
            technologies={[
              "React",
              "Node.js",
              "Netlify Serverless Functions",
              "Mantine UI",
              "Mongoose",
              "Cloudinary",
            ]}
            liveLink="https://nw-builds.netlify.app/"
            githubLinks={["https://github.com/tmorse01/nw-builds"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
