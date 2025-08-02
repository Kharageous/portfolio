import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import SkillBar from "../common/SkillBar";
import profileImage from "../../assets/images/profile.jpg";
import styles from "./About.module.css";

const About = ({ id }) => {
  const [activeTab, setActiveTab] = useState("skills");

  const skillsData = {
    frontend: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Photoshop", level: 75 },
      { name: "Adobe Illustrator", level: 70 },
      { name: "Microsoft Suite (Word,Excel,PowerPoint)", level: 80 },
    ],
  };

  return (
    <section id={id} className={styles.about}>
      <div className="container">
        <SectionTitle
          number="01"
          title="About Me"
          subtitle="Get to know more about me and my skills"
        />

        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img
              src={profileImage}
              alt="Arthur Courageous"
              className={styles.profileImg}
            />
            <div className={styles.imageOverlay}></div>
          </div>

          <div className={styles.aboutText}>
            <p className={styles.intro}>
              I'm a Full Stack Developer from Ghana currently studying Computer
              Science and Artificial Intelligence at Wenzhou University in
              China. With 3+ years of hands-on experience, I specialize in
              building responsive web applications and creating intuitive user
              experiences.
            </p>

            <div className={styles.tabs}>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "skills" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "experience" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "education" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "skills" && (
                <div className={styles.skillsContainer}>
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
                                : "#f72585"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className={styles.experienceContent}>
                  <p>
                    I have worked with various companies and clients, delivering
                    high-quality web solutions. My experience ranges from
                    freelance projects to full-time positions in both Ghana and
                    China.
                  </p>
                  <ul className={styles.experienceList}>
                    <li>3+ years of web development experience</li>
                    <li>Worked with international clients</li>
                    <li>Proven track record of delivering projects on time</li>
                    <li>Experience in both frontend and backend development</li>
                  </ul>
                </div>
              )}

              {activeTab === "education" && (
                <div className={styles.educationContent}>
                  <h3>Wenzhou University, China</h3>
                  <p className={styles.degree}>
                    Bachelor of Science in Computer Science and Artificial
                    Intelligence
                  </p>
                  <p className={styles.period}>2021 - 2025 (Expected)</p>
                  <ul className={styles.educationList}>
                    <li>Full Tuition Scholarship Recipient</li>
                    <li>
                      Key Courses: Algorithms, Machine Learning, Web Development
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
