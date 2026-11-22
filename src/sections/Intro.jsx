import profileImage from "../assets/BadDrawing.png";
import DownloadResume from "../components/DownloadResume";
import SocialLinks from "../components/SocialLinks";

function Intro() {
  return (
    <section className="page" id="intro">
      <div>
        <p className="paragraph-text">Hi, I'm</p>
        <h1 className="title-name">Ethan Borror</h1>
        <p className="paragraph-text">
          Test text: I am a software engineer with a passion for creating
          innovative and efficient solutions. I have experience in various
          programming languages and frameworks, and I enjoy learning new
          technologies to stay up-to-date in the ever-evolving field of software
          development.
        </p>
        <div className="intro-links">
          <SocialLinks />
          <DownloadResume />
        </div>
      </div>
      <div className="card card-primary profile-picture">
        <img src={profileImage} alt="Ethan Borror" />
      </div>
    </section>
  );
}

export default Intro;
