import Logo from "./Logo";
import { useState, useEffect } from "react";

const darkQuery = "(prefers-color-scheme: dark)";

const getSystemTheme = () =>
  window.matchMedia(darkQuery).matches ? "dark" : "light";

// localStorage can throw in some private-browsing modes
const getSavedTheme = () => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

function Header() {
  // A theme the visitor picked with the button wins; otherwise use the system's
  const [theme, setTheme] = useState(() => getSavedTheme() ?? getSystemTheme());

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Follow system theme changes until the visitor picks one themselves
  useEffect(() => {
    const media = window.matchMedia(darkQuery);
    const onChange = () => {
      if (!getSavedTheme()) setTheme(getSystemTheme());
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Only a button click saves a choice
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Not saved; the choice still applies for this visit
    }
  };

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
        <button className="btn btn-outline" onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
