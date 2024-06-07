import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLinks: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  liveLink,
  githubLinks,
}) => {
  return (
    <div className="grid gap-2 p-4 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-700">
      <h3 className="text-lg font-bold">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {title}
        </a>
      </h3>
      <p className="text-sm">{description}</p>
      <ul className="text-sm list-disc list-inside">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        {githubLinks.map((link, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
