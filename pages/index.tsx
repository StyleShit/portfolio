import Head from "next/head";
import Modal from "../components/Modal";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Project } from "../data/projects";
import { useState } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project>();

  const onProjectClick = (project: Project) => {
    setActiveProject(project);
  };

  const onModalClose = () => {
    setActiveProject(undefined);
  };

  return (
    <>
      <Head>
        <title>Portfolio | Evyatar Daud</title>
        <meta
          name="description"
          content="My name is Evyatar Daud. I'm a Full-Stack Developer and this is my portfolio. Feel free to contact me!"
        />
        <meta
          property="og:image"
          content="https://styleshit.github.io/img/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://styleshit.github.io/img/og-image.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Modal project={activeProject} onClose={onModalClose} />
        <Hero />
        <Projects onProjectClick={onProjectClick} />
        <Footer />
      </main>
    </>
  );
}
