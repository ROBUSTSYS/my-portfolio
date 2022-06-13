import React from "react";
import "./Skills.css";

const Skills = (props) => {
  return (
    <div className="card card-animation">
      <div className="card-image">
        <img className="main-image" src={props.logo} alt="logo" />
      </div>
      <div className="card-title">
        <h2>{props.title}</h2>
        <div className="onhover">
        {props.progress}
      </div>
      </div>
     
    </div>
  );
};

export default Skills;
