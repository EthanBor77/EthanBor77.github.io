// Not rendered yet: add <Experience /> to App.jsx and uncomment the
// Experience nav link in Header.jsx when this section is ready to show.
const jobs = [
  {
    role: "Job Title",
    company: "Company",
    dates: "Start – End",
    points: ["What you did", "What you accomplished"],
  },
];

function Experience() {
  return (
    <section className="page" id="experience">
      <h2 className="title-name">Experience</h2>
      <div className="about-me-right">
        {jobs.map((job) => (
          <section className="card" key={`${job.role}-${job.company}`}>
            <h3>{job.role}</h3>
            <p>{job.company}</p>
            <p className="muted">{job.dates}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Experience;
