import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="main-contact">
      <div className="contact-title">
        <h2>ContactMe</h2>
      </div>
      <div className="whatsapp">
        <i className="fa-brands fa-whatsapp fa-2xl"></i>
        <a href="https://wa.me/+918433849017" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
      <div className="email">
        <i className="fa-solid fa-envelope fa-2xl"></i>
        <a
          href="mailto:nurul.ansariascii@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
