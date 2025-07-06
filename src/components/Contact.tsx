import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "./Buttons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SectionHeader } from "./Shared";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-r md:py-24 lg:py-32">
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <SectionHeader
          title="Get in Touch"
          description="Feel free to reach out to me if you have any questions or would like to discuss a potential project."
        />
        <div className="flex justify-center gap-8">
          <LinkButton
            basic
            href="mailto:tmorse725@gmail.com"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
          >
            Email
          </LinkButton>
          <LinkButton
            basic
            href="https://www.linkedin.com/in/taylor-morse-86b294133/"
            icon={<FontAwesomeIcon icon={faLinkedin} />}
          >
            LinkedIn
          </LinkButton>
          <LinkButton
            basic
            href="https://github.com/tmorse01"
            icon={<FontAwesomeIcon icon={faGithub} />}
          >
            Github
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
