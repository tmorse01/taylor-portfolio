import FadeContent from "../../blocks/Animations/FadeContent/FadeContent";
import { SectionHeader } from "../Shared";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 bg-gray-200 md:py-24 lg:py-32 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <SectionHeader
          title="My Experience"
          description="I have worked on a variety of projects, ranging from small startups to large enterprises."
          useShinyText={true}
          size="large"
          fadeProps={{ duration: 800, threshold: 0.2 }}
        />

        <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <FadeContent duration={700} delay={100} threshold={0.1} blur>
            <div className="grid gap-1 p-4 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <h3 className="text-lg font-bold">Sr. Full Stack Developer</h3>
              <p className="text-sm">Builders Capital</p>
              <p className="text-sm ">Puyallup, WA | 03/24 - Present</p>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={200} threshold={0.1} blur>
            <div className="grid gap-1 p-4 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <h3 className="text-lg font-bold">Software Developer I and II</h3>
              <p className="text-sm">Heritage Bank</p>
              <p className="text-sm ">Burlington, WA | 02/19 - 03/24</p>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={300} threshold={0.1} blur>
            <div className="grid gap-1 p-4 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <h3 className="text-lg font-bold">Bachelor's Degree</h3>
              <p className="text-sm">Computer Science</p>
              <p className="text-sm">
                Western Washington University | Fall 2018
              </p>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={400} threshold={0.1} blur>
            <div className="grid gap-1 p-4 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <h3 className="text-lg font-bold">Online Courses</h3>
              <p className="text-sm">
                Taken various online courses on web development, including
                React, Node.js, and more.
              </p>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={500} threshold={0.1} blur>
            <div className="grid gap-1 p-4 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <h3 className="text-lg font-bold">Self-learning</h3>
              <p className="text-sm">
                Continuously enhancing my skills through self-directed study and
                personal projects.
              </p>
            </div>
          </FadeContent>

          <FadeContent duration={700} delay={600} threshold={0.1} blur>
            <div className="grid gap-1 p-4 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <h3 className="text-lg font-bold">Freelance Projects</h3>
              <p className="text-sm">
                Worked on several freelance projects, developing web
                applications for clients in various industries.
              </p>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default Experience;
