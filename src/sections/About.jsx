import DownloadResume from "../components/DownloadResume";

const facts = [
  { label: "School", value: "Oakland University, B.S. Computer Science" },
  { label: "Graduating", value: "May 2027" },
  { label: "Based in", value: "Clarkston, MI" },
  { label: "Currently learning", value: "React & Claude Code" },
  { label: "Open to", value: "Internships & full-time roles" },
];

function About() {
  return (
    <section className="page" id="about">
      <h2 className="title-name">About Me</h2>
      <div className="two-column about-layout">
        <section className="card about-story">
          <p>
            I'm a Computer Science student at Oakland University, graduating in
            May 2027. I like building practical products, from web apps to tools
            for the card games I play.
          </p>
          <p>
            {/* First sentence is weak. Tell an exect moment or story */}
            {/* I fell in love with coding when... */}I began coding due to my
            interest in how programs run and my desire to be able to create
            tangible products. For 5+ years I've coached at Pro Martial Arts
            Lake Orion, working with students of all ages, which taught me how
            to explain complex ideas clearly.
          </p>
          <p>
            Right now I'm looking for software engineering internships, and
            full-time roles once I graduate. If you think I'd be a good fit,{" "}
            <a className="project-link" href="#contact">
              get in touch
            </a>
            .
          </p>
        </section>

        <section className="card">
          <h3>Quick Facts</h3>
          <dl className="fact-list">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <DownloadResume />
        </section>
      </div>
    </section>
  );
}

export default About;
