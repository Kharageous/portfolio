import React from "react";
import PropTypes from "prop-types";
import styles from "./SectionTitle.module.css";

const SectionTitle = ({
  number,
  title,
  subtitle = "",
  align = "left",
  className = "",
}) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]} ${className}`}>
      <span className={styles.titleNumber}>{number}.</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

SectionTitle.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
};

export default SectionTitle;
