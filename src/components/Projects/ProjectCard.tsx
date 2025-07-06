import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TechStack from "./TechStack";
import SpotlightCard from "../../blocks/Components/SpotlightCard/SpotlightCard";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.4)">
      <div className="grid h-full gap-3">
        <div className="mb-2 overflow-hidden rounded-md">
          {videoUrl ? (
            <>
              <div className="relative cursor-pointer" onClick={openModal}>
                <video
                  className="w-full h-auto"
                  muted
                  loop
                  autoPlay
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black opacity-0 bg-opacity-30 hover:opacity-100">
                  <span className="px-3 py-1 text-white bg-blue-600 rounded">
                    Click to play
                  </span>
                </div>
              </div>
              {isModalOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                  onClick={closeModal}
                >
                  <div
                    className="relative w-full max-w-4xl p-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 bg-gray-800 rounded-full"
                      onClick={closeModal}
                    >
                      <FontAwesomeIcon icon={faXmark} className="text-white" />
                    </button>
                    <video className="w-full h-auto" controls autoPlay>
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center bg-gray-800 aspect-video">
              <span className="text-gray-500">{title} Preview</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-white">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            {title}
          </a>
        </h3>
        <p className="text-sm text-gray-300">{description}</p>
        <TechStack technologies={technologies} className="mt-2" />
        <div className="flex gap-2 mt-1">
          {githubLinks.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-1 text-sm text-gray-300 transition-colors rounded hover:bg-gray-800"
              title="View on GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-1" />
              <span>Code</span>
            </a>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
