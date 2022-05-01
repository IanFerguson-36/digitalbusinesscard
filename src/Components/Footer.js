import React from "react";
import GitIcon from "../Images/GitHub Icon.png";

export default function Footer() {
  function gitButton() {
    window.open("https://github.com/IanFerguson-36");
  }

  return (
    <div>
      <footer className="footer">
        <img
          onClick={gitButton}
          className="git-icon"
          src={GitIcon}
          alt="github icon"
        />
      </footer>
    </div>
  );
}
