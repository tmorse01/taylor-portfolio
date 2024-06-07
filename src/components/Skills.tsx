import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import {
  faPython,
  faJava,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons"; // Replacing faLeaf
import { faCode } from "@fortawesome/free-solid-svg-icons"; // Placeholder for faCSharp
// TODO: Word smith skills descriptions
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 bg-gray-200 dark:bg-gray-900 md:py-24 lg:py-32"
    >
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              I have a wide range of skills in web development, including React,
              Typescript, Node.js, Java, and more.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">React</h3>
            <FontAwesomeIcon icon={faReact} size="2x" />
            <p className="text-sm">
              Adept at crafting dynamic, single-page applications with React.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">TypeScript</h3>
            <FontAwesomeIcon icon={faJsSquare} size="2x" />
            <p className="text-sm">
              Skilled in enhancing JavaScript with strong typing using
              TypeScript.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">CSS</h3>
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <p className="text-sm">
              Expert in styling web applications with modern CSS techniques.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">HTML</h3>
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <p className="text-sm">
              Proficient in structuring web content with semantic HTML.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Node.js</h3>
            <FontAwesomeIcon icon={faNodeJs} size="2x" />
            <p className="text-sm">
              Experienced in building fast and scalable server-side applications
              with Node.js.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">C#</h3>
            <FontAwesomeIcon icon={faCode} size="2x" />
            <p className="text-sm">
              Proficient in using .NET Entity Framework for efficient data
              modeling and database interaction.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Java</h3>
            <FontAwesomeIcon icon={faJava} size="2x" />
            <p className="text-sm">
              Skilled in creating reliable and high-performance applications
              with Java.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Python</h3>
            <FontAwesomeIcon icon={faPython} size="2x" />
            <p className="text-sm">
              Versatile in writing efficient Python code for a variety of
              projects.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">SQL</h3>
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <p className="text-sm">
              Proficient in crafting complex SQL queries and managing relational
              databases.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">MongoDB</h3>
            <FontAwesomeIcon icon={faEnvira} size="2x" />
            <p className="text-sm">
              Experienced in designing NoSQL databases with MongoDB.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Azure / AWS</h3>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMicrosoft} size="2x" />
              <FontAwesomeIcon icon={faAws} size="2x" />
            </div>
            <p className="text-sm">
              Skilled in deploying and managing applications on Azure and AWS
              cloud platforms.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Git</h3>
            <FontAwesomeIcon icon={faGitAlt} size="2x" />
            <p className="text-sm">
              Proficient in version control and team collaboration using Git.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
