import React from "react";
import SectionTitle from "../common/SectionTitle";
import experienceData from "../../data/experience";
import styles from "./Experience.module.css";

const Experience = ({ id }) => {
  return (
    <section id={id} className={styles.experience}>
      <div className="container">
        <SectionTitle
          number="02"
          title="Work Experience"
          subtitle="Where I've worked and what I've accomplished"
        />

        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3>{exp.position}</h3>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <ul className={styles.timelineDescription}>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {exp.technologies && (
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
