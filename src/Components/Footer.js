import React from "react";
import GitIcon from "../Images/GitHub Icon.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <img className="git-icon" src={GitIcon} alt="github icon" />
      </footer>
    </div>
  );
}
