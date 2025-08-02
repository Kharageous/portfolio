import React from "react";
import SocialIcons from "../common/SocialIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo}>
              <span>Arthur</span>
              <span>Courageous</span>
            </div>
            <p className={styles.tagline}>
              Full Stack Developer & UI/UX Designer creating digital experiences
              that matter.
            </p>
            <SocialIcons
              links={{
                github: "https://github.com/yourusername",
                linkedin: "https://linkedin.com/in/yourprofile",
                twitter: "https://twitter.com/yourhandle",
                instagram: "https://instagram.com/yourprofile",
              }}
              size="medium"
              color="light"
            />
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linksColumn}>
              <h3 className={styles.linksTitle}>Quick Links</h3>
              <ul className={styles.linksList}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.linksTitle}>Contact</h3>
              <ul className={styles.linksList}>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:arthurcourageous@gmail.com">
                    arthurcourageous@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+86 132 1600 1172</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Wenzhou, China</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Arthur Courageous. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
