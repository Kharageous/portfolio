import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./SkillBar.module.css";

const SkillBar = ({
  skill,
  level,
  color = "#ff4d5a",
  showPercentage = true,
  animated = true,
  delay = 0,
}) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    if (!animated) {
      setAnimatedLevel(level);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimatedLevel(level);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [level, animated, delay]);

  return (
    <div className={styles.skillContainer} ref={skillRef}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skill}</span>
        {showPercentage && (
          <span className={styles.skillPercentage}>{animatedLevel}%</span>
        )}
      </div>
      <div className={styles.skillBar}>
        <div
          className={styles.skillLevel}
          style={{
            width: `${animatedLevel}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  color: PropTypes.string,
  showPercentage: PropTypes.bool,
  animated: PropTypes.bool,
  delay: PropTypes.number,
};

export default SkillBar;
