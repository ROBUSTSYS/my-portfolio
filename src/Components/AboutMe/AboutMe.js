import React from "react";
import "./AboutMe.css";
import resume from "./My Resume.pdf";

const AboutMe = () => {
  return (
    <div className="main-about">
      <h1>AboutMe</h1>
      <div className="picture">
        <img src="" alt="" />
      </div>
      <div className="contents">
        <h2>Nurul Ansari</h2>
        <h3>Front-end-developer</h3>
        <p>
          I buildd interactive websites that run across platforms and devices.{" "}
          <br /> <br />
          My abundant energy fuels me in the pursuit of many
          interest,hobbies,areas of study and artistics endeavors. i'am a fast
          learner,able to pick up new skills and juggle different projects and
          roles with relative ease.
          <br />
          <br />
          You can read more about my biography,experience,skills,education and
          much more in the PDF attached below:
        </p>
      </div>

      <a href={resume} target="_blank" rel="noreferrer">
        <button className="btn">have a look at my CV!</button>
      </a>
    </div>
  );
};

export default AboutMe;
