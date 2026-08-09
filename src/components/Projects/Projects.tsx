import ProjectCard from "./ProjectCard";
import { SectionHeader } from "../Shared";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-indigo-100/60 dark:from-slate-900 dark:to-blue-950/50"
    >
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <SectionHeader
          title="Projects"
          description="Showcasing my expertise in modern web development with React, TypeScript, and full-stack technologies. These projects demonstrate my ability to create intuitive user experiences, implement complex data visualizations, and build scalable applications."
          size="large"
          fadeProps={{ duration: 800, threshold: 0.2 }}
        />
        <div className="grid items-stretch gap-10 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <ProjectCard
            title="Rent vs Buy Dashboard"
            description="A comprehensive React web dashboard that helps users compare Rent vs Buy scenarios over time, using both cash-loss (unrecoverable costs) and net worth (balance-sheet) views. Features interactive scenario inputs, live-updating charts showing unrecoverable cost comparisons, net worth over time, and wealth breakdowns, key metrics including break-even calculations, and export functionality for scenarios and analysis packets."
            technologies={[
              "React",
              "TypeScript",
              "Vite",
              "Mantine UI",
              "Recharts",
            ]}
            liveLink="https://rent-vs-buy-comp.netlify.app/"
            githubLinks={["https://github.com/tmorse01/rent-vs-buy-dashboard"]}
            videoUrl="/demos/RentVsBuy.mp4"
          />
          <ProjectCard
            title="DiskScope"
            description="An Electron desktop app. A cleanup-focused disk usage analyzer for Windows developers and power users. Scan drives or folders, drill into the largest directories first, and get developer-aware cleanup hints for caches like node_modules and build outputs. With risk labels, live progress, and safe-by-default workflows."
            technologies={[
              "Electron",
              "React",
              "TypeScript",
              "Material-UI",
              "Vite",
              "Vitest",
              "Playwrite",
            ]}
            liveLink="https://disk-scope.netlify.app/"
            githubLinks={["https://github.com/tmorse01/disk-scope"]}
            videoUrl="/demos/DiskScope.mp4"
          />
          <ProjectCard
            title="Chess App"
            description="A fully-featured online chess application featuring real-time multiplayer gameplay, move validation, game history tracking, and an intuitive user interface. Built with a focus on clean code architecture and seamless user experience for chess enthusiasts."
            technologies={[
              "React",
              "TypeScript",
              "Express",
              "Socket.io",
              "Tailwind CSS",
              "Railway",
            ]}
            liveLink="https://chess-app.up.railway.app/"
            githubLinks={["https://github.com/tmorse01/chess"]}
            videoUrl="/demos/Chess.mp4"
          />
          <ProjectCard
            title="Diff-Slides"
            description="An interactive presentation tool for comparing and showcasing code differences visually. Perfect for presentations, documentation, and collaborative code reviews with an intuitive interface for highlighting changes side-by-side."
            technologies={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Supabase",
              "PostgreSQL",
            ]}
            liveLink="https://diff-slides.vercel.app/"
            githubLinks={["https://github.com/tmorse01/diff-slides"]}
            videoUrl="/demos/Diff-Slides.mp4"
          />
          <ProjectCard
            title="Layout Showcase"
            description="A comprehensive showcase of modern CSS layout techniques and patterns. Demonstrates Flexbox, CSS Grid, responsive design, and advanced layout strategies with interactive examples and live code demonstrations."
            technologies={[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Material-UI",
            ]}
            liveLink="https://layout-showcase-app.netlify.app/"
            githubLinks={["https://github.com/tmorse01/layout-showcase-app"]}
            videoUrl="/demos/LayoutShowcase.mp4"
          />
          <ProjectCard
            title="LendSight"
            description="Comparable analysis for real estate: an interactive web app for exploring property data with regression modeling, mapping, charts, and powerful filters—built for construction lenders and real estate professionals."
            technologies={[
              "React",
              "TypeScript",
              "Material-UI",
              "Recharts",
              "Google Maps API",
              "jsPDF",
            ]}
            liveLink="https://lendsight.netlify.app/"
            githubLinks={["https://github.com/tmorse01/regression-demo"]}
            videoUrl="/demos/RegressionAnalysis.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
