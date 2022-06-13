import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
    <div className="project-title">
      <h1>My Projects</h1>
    </div>
    <div className="projects-container">
      <div className="project">
        <a href="https://css-grid-nurul.netlify.app/">
          <img
            src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/622ac23bd88711437bad6953/screenshot_2022-03-11-03-30-11-0000.png"
            alt="css grid"
          />
          <h2>CSS GRID</h2>
        </a>
      </div>
      <div className="project">
        <a href="https://expanding-cards-nurul.netlify.app/">
          <img
            src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/622ac2fcd887114835ad6e00/screenshot_2022-03-11-03-33-25-0000.png"
            alt="expanding cards"
          />
          <h2>EXPANDING CARDS</h2>
        </a>
      </div>
      <div className="project">
        <a href="https://nurul-letterflix.netlify.app/">
          <img
            src="https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/6285cacbc6371d1cc3d8eea5/screenshot_2022-05-19-04-42-56-0000.png"
            alt="letter flix"
          />
          <h2>LETTER FLIX</h2>
        </a>
      </div>
      <div className="project">
        <a href="https://expense-tracker-reactjs1010.netlify.app/">
          <img
            src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627bcf8bb533ac0356b4efe3/screenshot_2022-05-11-15-01-34-0000.png"
            alt="expense tracker"
          />
          <h2>EXPENSE TRACKER</h2>
        </a>
      </div>
    </div>
    </>
  );
};

export default Projects;
