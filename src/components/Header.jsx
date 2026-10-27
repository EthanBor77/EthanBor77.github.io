import Logo from "./Logo";
// import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header class="site-header">
      <a href="https://ethanbor77.github.io/" className="brand-link">
        <Logo />
      </a>
      <nav class="nav-menu" aria-label="Primary Navigation">
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
      </nav>
    </header>
  );
}

export default Header;
