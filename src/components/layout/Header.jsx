import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button from "../common/Button";
import Navigation from "./Navigation";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <img src={logo} alt="Arthur Courageous" />
          </div>

          <Navigation isOpen={isMenuOpen} onClose={closeMenu} />

          <div className={styles.headerActions}>
            <Button
              variant="outline"
              size="small"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Me
            </Button>
            <button
              className={`${styles.menuToggle} ${
                isMenuOpen ? styles.open : ""
              }`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
