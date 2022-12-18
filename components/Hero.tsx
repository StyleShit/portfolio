import React from "react";
import Picture from "./Picture";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-clip">
        <div className="hero-bubbles hero-bubbles-left"></div>
        <div className="hero-bubbles hero-bubbles-right"></div>

        <h1 className="hero-title slide-in-from-top">Hello,</h1>

        <div className="hero-description slide-in-from-left">
          My Name is Evyatar Daud
          <br />
          And I&apos;m a Full-Stack Developer
        </div>

        <div className="hero-buttons-container">
          <a
            href="#my-projects"
            className="hero-btn hero-btn-primary scroll-to slide-in-from-bottom"
          >
            My Projects
          </a>
          <a
            href="#contact-me"
            className="hero-btn hero-btn-secondary scroll-to slide-in-from-top"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-floating-image slide-in-from-right">
        <Picture url="/img/hero.webp" fallback="/img/hero.png" alt="hero" />
      </div>
    </div>
  );
}
