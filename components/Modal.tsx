import React from "react";
import { Project } from "../data/projects";
import Picture from "./Picture";
import ModalLink from "./ModalLink";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  project: Project | undefined;
  onClose: () => void;
};

export default function Modal({ project, onClose }: Props) {
  const isModalOpen = !!project;

  return (
    <Dialog.Root
      open={isModalOpen}
      onOpenChange={(isOpen) => !isOpen && onClose()}
    >
      <Dialog.Portal className="modal">
        <Dialog.Overlay className="overlay" />
        <Dialog.Content asChild>
          <div className="modal">
            {project ? <ModalContent project={project} /> : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ModalContent({ project }: { project: Project }) {
  return (
    <>
      <div className="modal-image">
        <a href={project.image} target="__blank" rel="noopener noreferrer">
          <Picture
            url={project.image}
            fallback={project.fallbackImage}
            alt={project.title}
          />
        </a>
      </div>

      <div className="modal-text">
        <Dialog.Title asChild>
          <h3 className="modal-title">{project.title}</h3>
        </Dialog.Title>

        <Dialog.Description asChild>
          <>
            <p className="modal-description">
              <project.description />
            </p>

            <div className="modal-buttons-container">
              {project.links.map((link) => (
                <ModalLink {...link} key={link.href} />
              ))}
            </div>
          </>
        </Dialog.Description>

        <Dialog.Close asChild>
          <span className="modal-close-btn"></span>
        </Dialog.Close>
      </div>
    </>
  );
}
