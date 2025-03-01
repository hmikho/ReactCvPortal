import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/hmikho/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>My GitHub Projects</h2>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description || "No description available"}</p>
              <p><strong>Language:</strong> {project.language || "Unknown"}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
