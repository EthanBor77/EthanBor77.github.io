function About() {
  return (
    <section className="page" id="about">
      <h2 className="title-name">About Me</h2>
      <div className="about-me-content">
        <section className="about-me-box">
          Computer Science major at Oakland University offering hands-on
          experience in Java, HTML/CSS, and software development fundamentals.
          Brings strong problem-solving skills, technical certifications, and a
          proven ability to communicate complex ideas through teaching and
          leadership experience. Eager to contribute to a collaborative
          development team while building scalable, user-focused software
          solutions.
        </section>

        <div className="about-me-right">
          <section className="about-me-box">
            <h3>Skills</h3>
            <ul>
              <li>Java</li>
              <li>HTML/CSS</li>
              <li>Software Development</li>
            </ul>
          </section>
          <section className="about-me-box">
            <h3>Projects</h3>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </section>
          <section className="about-me-box">
            <h3>Areas of Expertise</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Technical Certifications</li>
              <li>Communication</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
