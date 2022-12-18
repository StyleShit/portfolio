import React from "react";
import Mockups from "./Mockups";
import Thumbnails from "./Thumbnails";
import { Project } from "../data/projects";

type Props = {
  onProjectClick: (project: Project) => void;
};

export default function Projects({ onProjectClick = () => {} }: Props) {
  return (
    <div className="projects-container" id="my-projects">
      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>
      <p className="projects-subtitle">Here are some of my recent projects</p>

      <Mockups onProjectClick={onProjectClick} />

      <Thumbnails onProjectClick={onProjectClick} />
    </div>
  );
}
