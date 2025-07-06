import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SectionHeader } from "./Shared";
import StarBorder from "../blocks/Animations/StarBorder/StarBorder";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-12 overflow-hidden bg-gradient-to-r from-indigo-900/20 to-blue-900/20 md:py-24 lg:py-32"
    >
      <div className="container relative px-4 mx-auto space-y-12 md:px-6">
        <SectionHeader
          title="Get in Touch"
          description="Feel free to reach out to me if you have any questions or would like to discuss a potential project."
          useShinyText={true}
          size="large"
          fadeProps={{ duration: 800, threshold: 0.2 }}
        />
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <StarBorder
            as="a"
            href="mailto:tmorse725@gmail.com"
            color="#4338ca"
            speed="8s"
            className="w-full transition-transform duration-300 sm:w-auto hover:scale-105"
            thickness={2}
          >
            <span className="flex items-center justify-center gap-3 px-2 py-1 text-lg font-medium">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              Email
            </span>
          </StarBorder>

          <StarBorder
            as="a"
            href="https://www.linkedin.com/in/taylor-morse-86b294133/"
            color="#3b82f6"
            speed="7s"
            className="w-full transition-transform duration-300 sm:w-auto hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            thickness={2}
          >
            <span className="flex items-center justify-center gap-3 px-2 py-1 text-lg font-medium">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              LinkedIn
            </span>
          </StarBorder>

          <StarBorder
            as="a"
            href="https://github.com/tmorse01"
            color="#8b5cf6"
            speed="9s"
            className="w-full transition-transform duration-300 sm:w-auto hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            thickness={2}
          >
            <span className="flex items-center justify-center gap-3 px-2 py-1 text-lg font-medium">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              Github
            </span>
          </StarBorder>
        </div>
      </div>
    </section>
  );
};

export default Contact;
