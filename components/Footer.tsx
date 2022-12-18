import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer" id="contact-me">
        <img className="footer-avatar" alt="avatar" src="/img/avatar.svg" />

        <h2 className="footer-title">Contact Me</h2>

        <div className="about-me">
          <h4>Hi, I&apos;m Evyatar, nice to meet you!</h4>

          <p>
            I LIVE Programming. I BREATHE Programming.{" "}
            <i className="em em-heartbeat" aria-label="BEATING HEART"></i>
            <br />A Web-Developer by Day & A Curious Programmer by Night{" "}
            <i
              className="em em-last_quarter_moon"
              aria-label="LAST QUARTER MOON SYMBOL"
            ></i>
            <br />
            Oh, and I Have Some Unexplained Attraction to CSS{" "}
            <i
              className="em em-sweat_smile"
              aria-label="SMILING FACE WITH OPEN MOUTH AND COLD SWEAT"
            ></i>
            <br />
            Feel Free to Contact Me Via the Following Methods:
          </p>
        </div>

        <div className="footer-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://codepen.io/EvyatarDa/"
          >
            <i className="lab la-codepen"></i>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/StyleShit"
          >
            <i className="lab la-github"></i>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/evyatar-daud-404738152/"
          >
            <i className="lab la-linkedin-in"></i>
          </a>

          <br />
          <br />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:evyatar.daud@gmail.com"
          >
            <i className="las la-envelope"></i>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="/download/CV.pdf">
            <i className="las la-file"></i>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="tel:0584958905">
            <i className="las la-mobile"></i>
          </a>
        </div>
      </div>

      <div className="copyrights">
        Evyatar Daud © {new Date().getFullYear()}
      </div>
    </>
  );
}
