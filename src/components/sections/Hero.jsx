import React from "react";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

const Hero = ({ id }) => {
  return (
    <section id={id} className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.subheading}>Full Stack Developer</p>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.nameHighlight}>Arthur</span>{" "}
              Courageous
            </h1>
            <p className={styles.description}>
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing.
            </p>
            <div className={styles.ctaButtons}>
              <Button
                variant="primary"
                size="large"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="large"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src={heroImage}
              alt="Arthur Courageous"
              className={styles.image}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
