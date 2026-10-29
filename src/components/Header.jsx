import Logo from "./Logo";
import { useState, useEffect } from "react";
// import ThemeToggle from "./ThemeToggle";

function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light",
  );

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // const menuToggle = document.querySelector(".menu-toggle");
  // const navLinks = document.querySelector(".nav-links");

  // menuToggle.addEventListener("click", () => {
  //   navLinks.classList.toggle("active");
  // });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header class="site-header">
      {/* Website Logo */}
      <a href="https://ethanbor77.github.io/" className="brand-link">
        <Logo />
      </a>

      {/* Nav dropdown for mobile screens only */}
      <button
        class="menu-toggle"
        aria-label="Toggle navigation"
        className="menu-toggle"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Nav bar links */}
      <nav
        class="nav-menu"
        aria-label="Primary Navigation"
        className={`nav-links ${isActive ? "active" : ""}`}
      >
        <a href="#about" class="nav-link">
          &#9667; About &#9657;
        </a>
        <a href="#Skills" class="nav-link">
          &#9667; Skills &#9657;
        </a>
        <a href="#Education" class="nav-link">
          &#9667; Education &#9657;
        </a>
        <a href="#Projects" class="nav-link">
          &#9667; Projects &#9657;
        </a>
        <a href="#Experience" class="nav-link">
          &#9667; Experience &#9657;
        </a>
        <a href="#Contact" class="nav-link">
          &#9667; Contact &#9657;
        </a>
        <button
          className="btn btn-outline"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
