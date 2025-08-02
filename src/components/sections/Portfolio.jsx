import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import portfolioData from "../../data/portfolio";
import PortfolioItem from "../common/PortfolioItem";
import styles from "./Portfolio.module.css";
import ABSTOREVideo from "../../assets/images/ABSTORE.mp4";
const Portfolio = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "design"];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id={id} className={styles.portfolio}>
      <div className="container">
        <SectionTitle
          number="05"
          title="My Portfolio"
          subtitle="A selection of my recent work"
        />

        <div className={styles.filterButtons}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterButton} ${
                activeFilter === filter ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.portfolioGrid}>
          {filteredProjects.map((project, index) => (
            <PortfolioItem key={index} project={project} delay={index * 100} />
          ))}
        </div>

        {/* Video under portfolio grid */}
        <div
          className={styles.videoContainer}
          style={{
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <video
            src={ABSTOREVideo}
            controls
            muted
            autoPlay
            loop
            style={{
              width: "100%", // 80% width of container
              maxWidth: "100%", // max width not to overflow
              height: "auto", // keep aspect ratio
              borderRadius: "8px",
              objectFit: "cover",
              display: "block",
              marginLeft: "auto", // center horizontally
              marginRight: "auto",
              overflow: "hidden",
            }}
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
