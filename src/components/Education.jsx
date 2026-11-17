const degrees = [
  {
    title: "Bachelor of Science in Computer Science",
    school: "Oakland University",
    date: "Expected Graduation: May 2027",
  },
];

const certifications = [
  { title: "Information Technology Specialist", date: "Certified 2022" },
  { title: "Microsoft Technology Associate", date: "Certified 2021" },
];

function Education() {
  return (
    <section className="page" id="education">
      <h2 className="title-name">Education & Certifications</h2>
      <div className="grid">
        {degrees.map((degree) => (
          <section className="card" key={degree.title}>
            <h3>{degree.title}</h3>
            <p>{degree.school}</p>
            <p className="muted">{degree.date}</p>
          </section>
        ))}
        {certifications.map((cert) => (
          <section className="card" key={cert.title}>
            <span className="tag">Certification</span>
            <h3>{cert.title}</h3>
            <p className="muted">{cert.date}</p>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Education;
