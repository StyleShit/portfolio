import React, { useState } from "react";
import { Project, projects } from "../data/projects";
import Picture from "./Picture";

type Props = {
  onProjectClick: (project: Project) => void;
};

export default function Thumbnails({ onProjectClick }: Props) {
  const [limit, setLimit] = useState(6);

  const hasShowMoreButton = limit < projects.length;
  const showcase = projects.slice(0, limit);

  return (
    <>
      <div className="thumbnails-clip-path"></div>

      <div className="thumbnails-container">
        {showcase.map((project, i) => {
          return (
            <div
              className="thumbnail"
              key={`thumb-${i}`}
              onClick={() => onProjectClick(project)}
            >
              <h4 className="thumbnail-title">{project.title}</h4>

              <div className="thumbnail-img">
                <Picture
                  url={project.image}
                  fallback={project.fallbackImage}
                  alt={project.title}
                />
              </div>
            </div>
          );
        })}

        {hasShowMoreButton && (
          <div className="show-more-btn-container">
            <button
              className="btn show-more-btn"
              onClick={() => setLimit((prev) => prev + 3)}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
