import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon = null,
  fullWidth = false,
}) => {
  const buttonClasses = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${fullWidth ? styles.fullWidth : ""} 
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
};

export default Button;
