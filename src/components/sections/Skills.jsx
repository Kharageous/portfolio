import React from "react";
import SectionTitle from "../common/SectionTitle";
import SkillBar from "../common/SkillBar";
import skillsData from "../../data/skills";
import styles from "./Skills.module.css";

const Skills = ({ id }) => {
  return (
    <section id={id} className={styles.skills}>
      <div className="container">
        <SectionTitle
          number="04"
          title="Technical Skills"
          subtitle="Technologies I work with"
        />

        <div className={styles.skillsGrid}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className={styles.skillList}>
                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    level={skill.level}
                    color={
                      category === "frontend"
                        ? "#4cc9f0"
                        : category === "backend"
                        ? "#7209b7"
                        : category === "databases"
                        ? "#f72585"
                        : "#3a86ff"
                    }
                    animated={true}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
