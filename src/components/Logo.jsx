import React from "react";
import logoImage from "../assets/Logo.png";

function Logo() {
  return (
    <div className="brand">
      <img src={logoImage} alt="Ethan Borror Logo" className="logoImage"></img>
      <span className="brand-name">{"{ Ethan Borror }"}</span>
      <span className="short-brand-name">{"{ EB }"}</span>
    </div>
  );
}

export default Logo;
