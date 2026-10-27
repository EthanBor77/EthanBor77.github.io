import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="header">
      <a href="#" className="brand-link">
        <Logo />
      </a>
      <ThemeToggle />
    </header>
  );
}

export default Header;
