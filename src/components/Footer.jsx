import SocialLinks from "./SocialLinks";

// Runs once when the page loads, so the year stays current without
// recalculating on every render.
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-content">
        <p>
          &copy; 2025–{currentYear} Ethan Borror. All rights reserved.
        </p>
        <div className="intro-links">
          <SocialLinks />
          <a
            alt="Download Ethan Borror's Resume"
            download="Ethan_Borror_Resume.pdf"
            href="/Ethan_Borror_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            title="Download Ethan Borror's Resume"
          >
            <button className="btn resume-button footer-btn">Resume</button>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
