import React from "react";
import PropTypes from "prop-types";
import styles from "./PortfolioItem.module.css";

const PortfolioItem = ({ project, delay }) => {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.portfolioImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.portfolioOverlay}>
          <div className={styles.overlayContent}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techTags}>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className={styles.portfolioLinks}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveUrl: PropTypes.string,
    codeUrl: PropTypes.string,
  }).isRequired,
  delay: PropTypes.number,
};

export default PortfolioItem;
