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
    image: "https://raw.githubusercontent.com/abhishekkatiyar/image-generator/main/demo.png"
  },
  {
    title: "URL Shortener",
    description:
      "A full-stack application that shortens long URLs, tracks analytics like click count and timestamps, and includes user login.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/abhishekkatiyar/url-shortener",
    live: "",
    image: "https://raw.githubusercontent.com/abhishekkatiyar/url-shortener/main/screenshot.png"
  },
  {
    title: "Blog Platform",
    description:
      "Created a blog website where users can read, write, and comment on articles. Includes a rich text editor and SEO optimization.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/abhishekkatiyar/blog-site",
    live: "",
    image: "https://raw.githubusercontent.com/abhishekkatiyar/blog-site/main/preview.png"
  },
  {
    title: "GreenLoop",
    description:
      "An e-waste management platform built using NestJS and MongoDB. Enables users to sell electronic waste securely and sustainably.",
    tech: ["NestJS", "MongoDB", "JWT", "TypeScript"],
    github: "https://github.com/abhishekkatiyar/greenloop",
    live: "",
    image: "https://raw.githubusercontent.com/abhishekkatiyar/greenloop/main/demo.png"
  },
];

function Project() {
  return (
    <div className={styles.projectSection}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.techList}>
              {project.tech.map((item, idx) => (
                <span key={idx} className={styles.techTag}>
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.technologiesUsed}>Technologies I Used</div>
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

      <div className={styles.allTechnologies}>
        <h2>All Technologies Used</h2>
        <div className={styles.techGroup}>
          {[...new Set(projects.flatMap(p => p.tech))].map((tech, idx) => (
            <span key={idx} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
