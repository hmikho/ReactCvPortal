import { useEffect, useState } from "react";

export default function CvData() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch("/ReactCvPortal/Cv.json")
      .then((response) => response.json())
      .then((data) => setCvData(data))
      .catch((error) => console.error("Error loading CV data:", error));
  }, []);
  

  if (!cvData) return <p>Loading...</p>;

  return (
    <div className="cv-container">
      <aside className="cv-sidebar">
        <h2>{cvData.profile.name}</h2>
        <p>{cvData.profile.title}</p>
        <section className="cv-contact-info">
          <h3>Kontakt</h3>
          <p>Email: {cvData.profile.contact.email}</p>
          <p>
            <a href={cvData.profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </p>
          <p>
            <a href={cvData.profile.contact.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
        </section>
      </aside>

      <section className="cv-content">
        <article className="cv-info">
          <h2>About Me</h2>
          <p>{cvData.profile.about}</p>
        </article>

        <hr />

        <article className="cv-info">
          <h2>Work Experience</h2>
          {cvData.workExperience.map((job, index) => (
            <section key={index}>
              <h3>{job.position} │ {job.company}</h3>
              <p>{job.description}</p>
              <hr />
            </section>
          ))}
        </article>

        <article className="cv-info">
          <h2>Education</h2>
          {cvData.education.map((edu, index) => (
            <section key={index}>
              <h3>{edu.degree} │ {edu.school} │ {edu.year}</h3>
            </section>
          ))}
        </article>
      </section>
    </div>
  );
}
