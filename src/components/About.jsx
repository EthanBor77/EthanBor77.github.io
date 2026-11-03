import profileImage from "../assets/BadDrawing.png";

function About() {
  return (
    <section className="page" id="about">
      <div>
        <p className="paragraph-text">Hi, I'm</p>
        <h1 className="title-name">Ethan Borror</h1>
        <p className="paragraph-text">
          I am a software engineer with a passion for creating innovative and
          efficient solutions. I have experience in various programming
          languages and frameworks, and I enjoy learning new technologies to
          stay up-to-date in the ever-evolving field of software development.
        </p>
      </div>
      <div className="card card-primary">
        <img src={profileImage} alt="Ethan Borror" />
      </div>
    </section>
  );
}

export default About;
