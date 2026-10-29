import React from "react";
import logoImage from "../assets/Logo.png";

function Logo() {
  return (
    <div className="brand">
      <img src={logoImage} alt="Ethan Borror Logo" class="logoImage"></img>
      <span className="brand-name">{"{ Ethan Borror }"}</span>
    </div>
  );
}

export default Logo;
