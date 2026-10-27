import { useState, useEffect } from "react";

function TestSetup() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="page">
      <header className="header">
        <h1>Color Test</h1>
        <button
          className="btn btn-outline"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </header>

      <p>
        This is regular body text on the page background. Here is a{" "}
        <a href="#">link in the accent color</a> inside a sentence.
      </p>
      <p className="muted">This is muted text on the page background.</p>

      <section className="grid">
        <article className="card">
          <h2>Standard card</h2>
          <p>Regular text on a card background.</p>
          <p className="muted">Muted text on a card background.</p>
          <span className="tag">Tag</span>
        </article>

        <article className="card card-primary">
          <h2>Primary card</h2>
          <p>Text on the primary color.</p>
          <button className="btn btn-accent">Accent button</button>
        </article>
      </section>

      <section className="buttons">
        <button className="btn btn-primary">Primary button</button>
        <button className="btn btn-accent">Accent button</button>
        <button className="btn btn-outline">Outline button</button>
      </section>
    </div>
  );
}

export default TestSetup;
