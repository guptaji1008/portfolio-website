import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectList from "../projectList";
import Navbar from "../components/Navbar";
import Meta from "../components/meta";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    if (id)
      setProject({
        ...projectList.find((elem) => elem.id.toString() == id.toString()),
      });
  }, [id]);

  console.log(project);

  return (
    <div className="project-back-image">
      <Meta title="Details" />
      <ProjectContent className="min-h-screen space-y-5" project={project} />
    </div>
  );
};

export default ProjectDetails;

const ProjectContent = ({ className, project }) => {
  return (
    <div className={className}>
      <Navbar activeLink="projectdetail" />
      <div className="lg:px-20 px-10">
        <ProjectInfo project={project} />
      </div>
    </div>
  );
};

const ProjectInfo = ({ project }) => {
  const { youtubeLink, about, name, githubLink, deployLink, skillUsed } = project;

  return (
    <div className="space-y-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <iframe
          className="w-full aspect-video lg:h-full rounded-lg"
          allowFullScreen
          src={youtubeLink}
        />
        <div className="text-white space-y-3">
          <p className="text-3xl font-semibold exp-font">{name} :</p>
          <div className="space-y-1">
            {about?.map((elem, ind) => (
              <ul className="text-white list-disc" key={ind}>
                <li className="exp-font text-start">{elem}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center md:space-x-3 md:space-y-0 space-y-1 md:justify-center">
        <p className="text-white text-xl exp-font font-semibold">Skill used: </p>
        <p className="text-white text-lg exp-font text-shadow">
          {skillUsed && skillUsed.map((elem) => `${elem},`)}
        </p>
      </div>
      <div className="flex lg:flex-row flex-col items-center lg:justify-between lg:space-y-0 space-y-7 pb-6">
        <div>
          {githubLink && Object?.keys(githubLink)?.length === 2 ? (
            <div className="flex flex-col">
              <a
                className="text-gray-400 hover:text-white transition text-xl exp-font"
                href={githubLink.frontend}
                target="_blank"
              >
                Source code (Frontend)
              </a>
              <a
                className="text-gray-400 hover:text-white transition text-xl exp-font"
                href={githubLink.backend}
                target="_blank"
              >
                Source code (Backend)
              </a>
            </div>
          ) : (
            githubLink && (
              <a
                className="text-gray-400 hover:text-white transition text-xl exp-font"
                href={githubLink.frontend}
                target="_blank"
              >
                Source code
              </a>
            )
          )}
        </div>
        <div>
          <a
            className="bg-pink-600 text-2xl py-3 px-5 text-white rounded-xl"
            href={deployLink}
            target="_blank"
          >
            Check Application
          </a>
        </div>
      </div>
    </div>
  );
};
