import FadeContent from "../../blocks/Animations/FadeContent/FadeContent";
import { SectionHeader } from "../Shared";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 bg-gradient-to-b from-blue-50 to-indigo-100/60 dark:from-slate-900 dark:to-blue-950/50 md:py-24 lg:py-32"
    >
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <SectionHeader
          title="My Experience"
          description="I have worked on a variety of projects, ranging from small startups to large enterprises."
          size="large"
          fadeProps={{ duration: 800, threshold: 0.2 }}
        />

        <div className="grid items-start gap-8 mx-auto sm:max-w-6xl lg:grid-cols-2">
          <FadeContent duration={700} delay={100} threshold={0.1} blur>
            <div className="grid gap-4 p-6 transition-all bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Senior Front End Software Developer
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Builders Capital
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Puyallup, WA | 02/24 - Present
                </p>
                <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  React, NodeJS, C# (ASP.NET), SQL
                </p>
              </div>
              <div className="space-y-2">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Architected and built Builders Capital’s next-generation
                      architecture, leveraging Node.js, microservices, and
                      cloud-native patterns to replace legacy systems;
                      established shared component libraries, authentication
                      flows (MFA, JWT, device registration), and scalable CI/CD
                      pipelines to support enterprise-grade software solutions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Designed and implemented a modern pricing and loan
                      application platform, replacing legacy Excel-based systems
                      and streamlining workflows.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Resolved critical performance bottlenecks in the legacy
                      system by implementing modern build optimization
                      techniques, resulting in faster user workflows and
                      improved productivity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={200} threshold={0.1} blur>
            <div className="grid gap-4 p-6 transition-all bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Software Developer II
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Heritage Bank
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Burlington, WA | 02/21 - 02/24
                </p>
                <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Java, React, SQL, Python
                </p>
              </div>
              <div className="space-y-2">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Acted as tech lead for multiple business critical internal
                      applications, coordinating infrastructure deployments and
                      presenting implementation plans to the change management
                      board
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Helped grow the team from 4 developers to 14. Reviewing
                      resumes, conducting technical interviews, and performing
                      onboarding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Mentored junior developers through pair programming
                      sessions and code reviews, contributing to their career
                      advancement and skill development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Engineered a robust low-code event handler workflow
                      system, empowering business analysts to independently
                      design and deploy complex business logic, significantly
                      accelerating solution delivery and reducing reliance on
                      developer resources
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={300} threshold={0.1} blur>
            <div className="grid gap-4 p-6 transition-all bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Software Developer I
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Heritage Bank
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Burlington, WA | 02/19 - 02/21
                </p>
                <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Java, React, SQL
                </p>
              </div>
              <div className="space-y-2">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Learned React and built a core reusable component library,
                      enabling rapid development of scalable enterprise
                      applications across multiple teams.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Developed the core commercial bank loan origination
                      system, reducing reliance on third-party solutions and
                      automating key loan processing workflows to achieve
                      significant cost savings.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      Created Cruise, a full stack low code platform for
                      building internal web applications easily with a WYSIWYG
                      editor, JSON forms, web services, and plugins.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={400} threshold={0.1} blur>
            <div className="grid gap-4 p-6 transition-all bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Bachelor of Science
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Computer Science
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Western Washington University | 2018
                </p>
                <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Core Curriculum: Data Structures, Algorithms, Software
                  Engineering
                </p>
              </div>
              <div className="space-y-2">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Core Programming Sequence:</strong> Advanced
                      programming concepts, data structures implementation, and
                      algorithm analysis (CSCI 241, 247, 301)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Senior Capstone Project:</strong> Led research on
                      Reddit user behavior analysis using machine learning,
                      semantic analysis, and NLP techniques to detect
                      problematic users. Co-authored and published research
                      paper documenting methodology and findings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Mathematical Foundation:</strong> Calculus, linear
                      algebra, and statistics for analytical and data modeling
                      skills.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Science Sequence:</strong> Completed chemistry and
                      biology courses, building analytical and experimental
                      skills relevant to problem solving in software
                      development.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={500} threshold={0.1} blur>
            <div className="grid gap-4 p-6 transition-all bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Freelance Projects
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Independent Development
                </p>
                <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  React, HTML/CSS, JavaScript, Full-Stack Development
                </p>
              </div>
              <div className="space-y-2">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Local Business Websites:</strong> Designed and
                      developed static content websites for Bellingham-area
                      clients including schools and landscaping companies,
                      focusing on clean design, responsive layouts, and
                      optimized user experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Passion Project Applications:</strong> Built
                      custom web applications for friends' projects including
                      budgeting tools, event management systems, and note-taking
                      platforms, demonstrating versatility across different
                      domains and user needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Client Collaboration:</strong> Managed full
                      project lifecycle from requirements gathering to
                      deployment, working directly with clients to understand
                      their vision and deliver solutions that exceed
                      expectations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={600} threshold={0.1} blur>
            <div className="grid gap-4 p-6 transition-all bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Continuous Learning
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Professional Development
                </p>
                <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tech Research, Community Engagement, Skill Development
                </p>
              </div>
              <div className="space-y-2">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Technology Research:</strong> Actively research
                      emerging technologies, frameworks, and development
                      patterns through technical documentation, GitHub
                      repositories, and industry publications to stay ahead of
                      evolving trends
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Developer Community:</strong> Follow leading web
                      development content creators, participate in tech Twitter
                      discussions, and engage with developer communities to
                      learn best practices and gain insights from industry
                      experts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Hands-on Experimentation:</strong> Build personal
                      projects and prototypes to explore new tools like modern
                      React patterns, TypeScript features, and performance
                      optimization techniques, applying learnings to
                      professional work
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    <span>
                      <strong>Professional Growth:</strong> Attend virtual
                      conferences, complete online courses, and read technical
                      blogs to deepen understanding of software architecture,
                      design patterns, and industry best practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default Experience;
