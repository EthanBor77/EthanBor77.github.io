const email = "ethanrborror@gmail.com";

const links = [
  { label: "GitHub", value: "EthanBor77", href: "https://github.com/EthanBor77" },
  {
    label: "LinkedIn",
    value: "ethan-borror",
    href: "https://www.linkedin.com/in/ethan-borror/",
  },
  { label: "Email", value: email, href: `mailto:${email}` },
  { label: "Location", value: "Clarkston, MI" },
  { label: "Resume", value: "Download PDF", href: "/Ethan_Borror_Resume.pdf" },
];

// GitHub Pages has no server, so the form opens the visitor's email app
// with the message already filled in.
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = form.get("subject");
  const body = `${form.get("message")}\n\n- ${form.get("name")} (${form.get("email")})`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Contact() {
  return (
    <section className="page" id="contact">
      <h2 className="title-name">Contact Me</h2>
      <div className="two-column">
        <section className="card">
          <h3>My Links</h3>
          <ul className="contact-list">
            {links.map((link) => (
              <li key={link.label}>
                <span className="muted">{link.label}: </span>
                {link.href ? (
                  <a
                    className="project-link"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.value}
                  </a>
                ) : (
                  link.value
                )}
              </li>
            ))}
          </ul>
        </section>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <label>
            Your name
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Subject
            <input name="subject" type="text" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn btn-accent" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
