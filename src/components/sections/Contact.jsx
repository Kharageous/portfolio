import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import SocialIcons from "../common/SocialIcons";
import Button from "../common/Button";
import styles from "./Contact.module.css";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    const scriptURL =
      "https://script.google.com/macros/s/AKfycby2ovmkZhZGtoL3R3ZxQb32ShfZgCBWSTSpJR0tMLloL0Cw64tsXepWUAOKxnO9oaUKyg/exec";

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        setMessage({
          text: "Your message has been sent successfully!",
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setMessage({
        text: "There was an error sending your message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className={styles.contact}>
      <div className="container">
        <SectionTitle
          number="07"
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss potential opportunities?"
        />

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              Feel free to reach out to me for any questions or opportunities.
              I'll get back to you as soon as possible.
            </p>

            <div className={styles.infoItem}>
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href="mailto:arthurcourageous@gmail.com">
                  arthurcourageous@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Phone</h4>
                <a href="tel:+8613216001172">+86 132 1600 1172</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>
                  Chashan University Town, Wenzhou City, Zhejiang Province,
                  China
                </p>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4>Follow Me</h4>
              <SocialIcons
                links={{
                  github: "https://github.com/Kharageous",
                  linkedin:
                    "https://linkedin.com/in/courageous-arthur-918aab27b",
                  twitter: "https://twitter.com/bhra_tech",
                }}
                size="medium"
                color="primary"
              />
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {message.text && (
                <div className={`${styles.message} ${styles[message.type]}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
