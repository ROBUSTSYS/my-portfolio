import React from "react";
import "./Home.css";
import homeImage from "../images/homeimage.jpg";
const Home = () => {
  return (
    <>
      <div className="main-home">
        <div className="information">
          <h1>Hello!</h1>
          <h2>I am Nurul.</h2>
          <h3>Front-End-Developer</h3>
          <p>
            I build interactive websites <br />
            that run across many platformsn and devices
          </p>
        </div>
        <div>
          <img className="image" src={homeImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
