import React from "react";
import { Project } from "../data/projects";

type Props = Project["links"][number];

const linksConfig = {
  preview: {
    icon: "las la-eye",
    text: "Preview",
  },
  github: {
    icon: "lab la-github",
    text: "Github",
  },
  codepen: {
    icon: "lab la-codepen",
    text: "Codepen",
  },
} as const;

export default function ModalLink({ type, href }: Props) {
  const icon = linksConfig[type].icon;
  const text = linksConfig[type].text;

  return (
    <a
      className="btn modal-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={icon}></i>&nbsp;{text}
    </a>
  );
}
