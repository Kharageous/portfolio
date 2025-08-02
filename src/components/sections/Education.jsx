import React from "react";
import SectionTitle from "../common/SectionTitle";
import educationData from "../../data/education";
import styles from "./Education.module.css";

const Education = ({ id }) => {
  return (
    <section id={id} className={styles.education}>
      <div className="container">
        <SectionTitle
          number="03"
          title="Education"
          subtitle="My academic background and achievements"
        />

        <div className={styles.educationGrid}>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <div className={styles.educationHeader}>
                <h3>{edu.institution}</h3>
                <span className={styles.period}>{edu.period}</span>
              </div>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={styles.location}>{edu.location}</p>

              <ul className={styles.achievements}>
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              {edu.courses && (
                <div className={styles.courses}>
                  <h4>Key Courses:</h4>
                  <div className={styles.courseTags}>
                    {edu.courses.map((course, i) => (
                      <span key={i}>{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
