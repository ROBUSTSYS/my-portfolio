import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <h1>Get in Touch!</h1>
      <div className="logos">
        <div className="tooltip">
          <a href="https://www.instagram.com/nurul.ascii/" target= '_blank' rel="noreferrer">
            <i className=" logo fa-brands fa-instagram fa-2xl tooltip"> </i>
            <span className="tooltiptext">Instagram</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://www.linkedin.com/in/nurul-ansari-b604371a9/" target= '_blank' rel="noreferrer">
            <i className=" logo fa-brands fa-linkedin-in fa-2xl tooltip "></i>
            <span className="tooltiptext">linkdin</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://www.facebook.com/nurul.ansari.549" target='_blank' rel="noreferrer">
          <i className=" logo fa-brands fa-facebook-f fa-2xl tooltip"></i>
          <span className="tooltiptext">Facebook</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://github.com/ROBUSTSYS" target="_blank" rel="noreferrer">
            <i className=" logo fa-brands fa-github fa-2xl tooltip"></i>
            <span className="tooltiptext">Github</span>
          </a>
        </div>
      </div>
      <div className="info">Created by Nurul</div>
    </div>
  );
};

export default Footer;
