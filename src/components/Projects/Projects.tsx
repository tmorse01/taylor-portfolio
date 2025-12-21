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
            title="Group Pay"
            description="Cloud-native expense tracking app deployed on Azure with comprehensive observability via Application Insights. Features application maps, distributed tracing, and performance telemetry to practice enterprise monitoring patterns alongside secure authentication and flexible bill splitting."
            technologies={[
              "React",
              "TypeScript",
              "Azure App Insights",
              "Azure Cloud",
              "Fastify",
              "PostgreSQL",
              "Prisma",
              "TanStack Query",
            ]}
            liveLink="https://grouppay.taylormorsedev.com"
            githubLinks={["https://github.com/tmorse01/group-pay"]}
            videoUrl="/demos/GroupPay.mp4"
          />
          <ProjectCard
            title="Construction Lender Regression Analysis"
            description="A modern, interactive web application for analyzing real estate property data with advanced regression analysis, data visualization, and comprehensive filtering capabilities built for construction lenders and real estate professionals."
            technologies={[
              "React",
              "TypeScript",
              "Material-UI",
              "Recharts",
              "Google Maps API",
              "jsPDF",
            ]}
            liveLink="https://regression-demo.netlify.app/"
            githubLinks={["https://github.com/tmorse01/regression-demo"]}
            videoUrl="/demos/RegressionAnalysis.mp4"
          />
          <ProjectCard
            title="Pitch Site"
            description="Developed a flashy, animated pitch deck generator that helps real estate investors create AI-powered, colorful presentations with step-by-step forms and shareable previews."
            technologies={[
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "Mantine UI",
              "Railway",
            ]}
            liveLink="https://pitchsite-client-production.up.railway.app/share/lXYUaM"
            githubLinks={["https://github.com/tmorse01/pitchsite"]}
            videoUrl="/demos/PitchSite.mp4"
          />
          <ProjectCard
            title="Housing Market Trends"
            description="Leveraging Zillow's comprehensive datasets, I engineered visually stunning, interactive data visualizations to uncover and explore dynamic trends in the US housing market."
            technologies={[
              "React",
              "TypeScript",
              "React-Query",
              "Tailwind",
              "HeadlessUI",
              "Recharts",
              "D3",
            ]}
            liveLink="https://housing-market-trends.netlify.app/"
            githubLinks={["https://github.com/tmorse01/housing-visualizations"]}
            videoUrl="/demos/HousingMarketTrends.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
