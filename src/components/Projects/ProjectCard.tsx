import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TechStack from "./TechStack";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLinks: string[];
  videoUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  liveLink,
  githubLinks,
  videoUrl,
}) => {
  return (
    <div className="grid gap-3 p-5 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-700">
      {videoUrl && (
        <div className="mb-2 overflow-hidden rounded-md">
          <video className="w-full h-auto" controls loop muted>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <h3 className="text-xl font-bold">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          {title}
        </a>
      </h3>
      <p className="text-sm">{description}</p>
      <TechStack technologies={technologies} className="mt-2" />
      <div className="flex gap-2 mt-1">
        {githubLinks.map((link, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-1 text-sm text-gray-700 transition-colors rounded hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600"
            title="View on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-1" />
            <span>Code</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
