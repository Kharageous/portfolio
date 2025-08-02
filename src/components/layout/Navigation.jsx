import React from "react";
import { Link } from "react-scroll";
import styles from "./Navigation.module.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Navigation = ({ isOpen, onClose }) => {
  return (
    <nav className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.id} className={styles.navItem}>
            <Link
              to={link.id}
              smooth={true}
              duration={500}
              className={styles.navLink}
              onClick={onClose}
              activeClass={styles.active}
              spy={true}
              offset={-80}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
