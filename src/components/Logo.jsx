import React from "react";
import logoImage from "./assets/Logo.png";

function Logo({ size = 80 }) {
  return (
    <div className="brand">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <rect
          width="64"
          height="64"
          rx="14"
          style={{ fill: "var(--primary)" }}
        />
        <path
          d="M10 16H26V22H16V29H24V35H16V42H26V48H10Z"
          style={{ fill: "var(--on-color)" }}
        />
        <path
          d="M34 16V48M34 19H41a6.5 6.5 0 0 1 0 13H34M34 32H42a6.5 6.5 0 0 1 0 13H34"
          style={{
            fill: "none",
            stroke: "var(--on-color)",
            strokeWidth: 6,
          }}
        />
        <circle
          cx="55"
          cy="47"
          r="3.5"
          style={{ fill: "var(--accent-reverse)" }}
        />
      </svg> */}
      <img src={logoImage} alt="Ethan Borror Logo"></img>
      <span className="brand-name">{"{ Ethan Borror }"}</span>
    </div>
  );
}

export default Logo;
