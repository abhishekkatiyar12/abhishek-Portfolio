import React from "react";
import styles from "./Project.module.css";

const projects = [
  {
    title: "Image Generator App",
    description:
      "Built with React and Node.js, this app generates images from text prompts using an AI API. Features secure user authentication and image storage in MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abhishekkatiyar/image-generator",
    live: "https://img-generator-umber.vercel.app/",
  },
  {
    title: "URL Shortener",
    description:
      "A full-stack application that shortens long URLs, tracks analytics like click count and timestamps, and includes user login.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/abhishekkatiyar/url-shortener",
    live: "",
  },
  {
    title: "Blog Platform",
    description:
      "Created a blog website where users can read, write, and comment on articles. Includes a rich text editor and SEO optimization.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/abhishekkatiyar/blog-site",
    live: "",
  },
];

function Project() {
  return (
    <div className={styles.projectSection}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.techList}>
              {project.tech.map((item, idx) => (
                <span key={idx} className={styles.techTag}>
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
