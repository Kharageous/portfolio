import React from "react";
import PropTypes from "prop-types";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import styles from "./SocialIcons.module.css";

const iconComponents = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebook,
  youtube: FaYoutube,
  website: FaGlobe,
};

const SocialIcons = ({
  links,
  size = "medium",
  color = "default",
  className = "",
}) => {
  return (
    <div
      className={`${styles.socialIcons} ${styles[size]} ${styles[color]} ${className}`}
    >
      {Object.entries(links).map(([platform, url]) => {
        const IconComponent = iconComponents[platform.toLowerCase()];
        if (!IconComponent || !url) return null;

        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform}
            className={styles.socialIcon}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

SocialIcons.propTypes = {
  links: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    youtube: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["default", "primary", "secondary", "dark", "light"]),
  className: PropTypes.string,
};

export default SocialIcons;
