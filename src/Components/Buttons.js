import React from "react";
import EmailIcon from "../Images/Icon.jpg";
import LinkedInIcon from "../Images/Vector.png";

export default function Email() {
  function emailButton() {
    window.location = "mailto:ian.ferg36@gmail.com";
  }
  function linkedinButton() {
    window.open("https://www.linkedin.com/in/ian-ferguson-827877153/");
  }

  return (
    <div className="button-container">
      <button onClick={emailButton} className="button-email">
        <img className="email-icon" src={EmailIcon} alt="envelope icon" /> Email
      </button>
      <button onClick={linkedinButton} className="button-linkedin">
        <img className="linkedin-icon" src={LinkedInIcon} alt="linkedin icon" />
        LinkedIn
      </button>
    </div>
  );
}
