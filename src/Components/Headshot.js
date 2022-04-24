import React from "react";
import Image from "../Images/adjustedheadshot.png";

export default function Headshot() {
  return (
    <div className="headshot">
      <img
        className="self-portrait"
        src={Image}
        alt="Me with Roger the Weiner Dog"
      />
    </div>
  );
}