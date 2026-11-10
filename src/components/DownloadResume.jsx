import resume from "../../public/Ethan_Borror_Resume.pdf";

function DownloadResume() {
  return (
    <a
      alt="Download Ethan Borror's Resume"
      download="Ethan_Borror_Resume.pdf"
      href={resume}
      rel="noopener noreferrer"
      target="_blank"
      title="Download Ethan Borror's Resume"
    >
      <button className="btn btn-accent">Resume</button>
    </a>
  );
}

export default DownloadResume;
