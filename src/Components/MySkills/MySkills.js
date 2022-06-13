import React from "react";
import "./MySkills.css";
import Skills from "./Skills";
import html from "../images/html5-brands.svg";
import css from "../images/css3-alt-brands.svg";
import js from "../images/js-brands.svg";
import react from "../images/react-brands.svg";
import bootstrap from "../images/bootstrap-brands.svg";
import mysql from "../images/mysql.png";
import php from "../images/php-brands.svg";
import git from "../images/github-brands.svg";

const MySkills = (props) => {
  return (
    <>
    <div className="main-myskills">
    <h1>My Skills</h1>
    <div className="main-skills">
      <Skills logo={html} title="HTML5" progress={"90%"}/>
      <Skills logo={css} title="CSS3" progress={"80%"}/>
      <Skills logo={js} title="Java Script" progress={"70%"}/>
      <Skills logo={react} title="React" progress={"50%"}/>
      <Skills logo={bootstrap} title="Bootstrap" progress={"90%"}/>
      <Skills logo={mysql} title="MySQL" progress={"60%"}/>
      <Skills logo={php} title="PHP" progress={"55%"}/>
      <Skills logo={git} title="GITHUB" progress={"85%"}/>
    </div>
    </div>
    </>
  );
};

export default MySkills;
