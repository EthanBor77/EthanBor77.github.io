// To add a project, add an object to this list.
// `link` is optional; leave it out if there's nothing to link to yet.
const projects = [
  { name: "Website for Keagan", description: "Description coming soon." },
  { name: "CaloriesCount", description: "Description coming soon." },
  { name: "MTG Game Tracker", description: "Description coming soon." },
  { name: "GrizzPOP", description: "Description coming soon." },
  { name: "TopDeckCardShop", description: "Description coming soon." },
  { name: "Day Tracks", description: "Description coming soon." },
  {
    name: "This Website",
    description: "My personal portfolio, built with React and Vite.",
    link: "https://github.com/EthanBor77/EthanBor77.github.io",
  },
];

function Projects() {
  return (
    <section className="page" id="projects">
      <h2 className="title-name">Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <section className="card project-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a
                className="project-link"
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                View project &#9657;
              </a>
            )}
          </section>
        ))}
      </div>
      <a
        className="btn btn-outline"
        href="https://github.com/EthanBor77"
        rel="noopener noreferrer"
        target="_blank"
      >
        See more on GitHub
      </a>
    </section>
  );
}

export default Projects;
