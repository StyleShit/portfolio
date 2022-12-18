import React from "react";
import { Project, mockups } from "../data/projects";
import Picture from "./Picture";

type Props = {
  onProjectClick: (project: Project) => void;
};

export default function Mockups({ onProjectClick }: Props) {
  const [leftProject, rightProject] = mockups;

  return (
    <>
      <div className="mockup-devices">
        <span className="click-animation">
          <span className="click-animation-cursor"></span>
          <span className="click-animation-drop"></span>
        </span>

        <div
          className="mockup-left"
          onClick={() => onProjectClick(leftProject)}
        >
          <Picture
            url={leftProject.mockupImage}
            fallback={leftProject.fallbackMockupImage}
            alt={leftProject.title}
          />

          <span className="mockup-description">
            <i className="las la-search-plus"></i>&nbsp;
            {leftProject.title}
          </span>
        </div>

        <div
          className="mockup-right"
          onClick={() => onProjectClick(rightProject)}
        >
          <Picture
            url={rightProject.mockupImage}
            fallback={rightProject.fallbackMockupImage}
            alt={rightProject.title}
          />

          <span className="mockup-description">
            <i className="las la-search-plus"></i>&nbsp;
            {rightProject.title}
          </span>
        </div>
      </div>
    </>
  );
}
