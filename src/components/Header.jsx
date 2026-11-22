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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="site-header">
      {/* Website Logo */}
      <a href="https://ethanbor77.github.io/" className="brand-link">
        <Logo />
      </a>

      {/* Nav dropdown for mobile screens only */}
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        // className="menu-toggle"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Nav bar links */}
      <nav
        className={`nav-menu ${isActive ? "active" : ""}`}
        aria-label="Primary Navigation"
      >
        <a href="#about" className="nav-link">
          &#9667; About &#9657;
        </a>
        <a href="#skills" className="nav-link">
          &#9667; Skills &#9657;
        </a>
        <a href="#education" className="nav-link">
          &#9667; Education &#9657;
        </a>
        <a href="#projects" className="nav-link">
          &#9667; Projects &#9657;
        </a>
        {/* Hidden until the Experience section is shown
        <a href="#experience" className="nav-link">
          &#9667; Experience &#9657;
        </a> */}
        <a href="#contact" className="nav-link">
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
