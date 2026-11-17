import { useState } from "react";

// Logo sources, pinned to exact versions so they never change unexpectedly.
const devicon = (name) =>
  `https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/${name}/${name}-original.svg`;
const simpleIcon = (name) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/${name}.svg`;

// To add a skill, add it to a category below.
// `icon` is optional: without one, the hexagon shows just the name.
// `mono: true` marks black, single-color logos so they flip to white in dark mode.
const categories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", icon: devicon("java") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "Python", icon: devicon("python") },
      { name: "HTML", icon: devicon("html5") },
      { name: "CSS", icon: devicon("css3") },
      { name: "C", icon: devicon("c") },
      { name: "C++", icon: devicon("cplusplus") },
      { name: "C#", icon: devicon("csharp") },
      { name: "R", icon: devicon("r") },
      { name: "SQL" },
    ],
  },
  {
    name: "Frameworks & Dev Tools",
    skills: [
      { name: "React", icon: devicon("react") },
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github"), mono: true },
      { name: "VS Code", icon: devicon("vscode") },
      { name: "Linux", icon: devicon("linux") },
      { name: "MySQL", icon: devicon("mysql") },
      { name: "Jupyter", icon: devicon("jupyter") },
      { name: "Unity", icon: devicon("unity"), mono: true },
    ],
  },
  {
    name: "Design & Collaboration",
    skills: [
      { name: "Figma", icon: devicon("figma") },
      { name: "Jira", icon: devicon("jira") },
      { name: "Mermaid", icon: simpleIcon("mermaid"), mono: true },
      { name: "Google Workspace", icon: devicon("google") },
      { name: "Microsoft Office" },
    ],
  },
  {
    name: "AI Tools",
    skills: [
      { name: "Claude", icon: simpleIcon("claude"), mono: true },
      { name: "Gemini", icon: simpleIcon("googlegemini"), mono: true },
      { name: "ChatGPT", icon: simpleIcon("openai"), mono: true },
    ],
  },
  {
    name: "Core Concepts",
    skills: [
      { name: "Data Structures" },
      { name: "Time Complexity" },
      { name: "Optimization" },
      { name: "Object-Oriented Programming" },
      { name: "Debugging" },
      { name: "Problem Solving" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [{ name: "Teamwork" }, { name: "Communication" }],
  },
];

function Skills() {
  // Which category is highlighted; null shows them all equally.
  const [active, setActive] = useState(null);

  return (
    <section className="page" id="skills">
      <h2 className="title-name">Skills</h2>

      <div className="skill-filters" role="group" aria-label="Filter skills">
        <button
          className={`btn btn-outline ${active === null ? "selected" : ""}`}
          onClick={() => setActive(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            className={`btn btn-outline ${active === category.name ? "selected" : ""}`}
            onClick={() => setActive(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="honeycomb">
        <ul className="honeycomb-inner">
          {categories.flatMap((category) =>
            category.skills.map((skill) => (
              <li
                key={skill.name}
                className={`hex ${active && active !== category.name ? "dimmed" : ""}`}
                title={`${skill.name} · ${category.name}`}
              >
                <div className="hex-inner">
                  {skill.icon && (
                    <img
                      className={`hex-icon ${skill.mono ? "mono" : ""}`}
                      src={skill.icon}
                      alt=""
                    />
                  )}
                  <span className="hex-label">{skill.name}</span>
                </div>
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
