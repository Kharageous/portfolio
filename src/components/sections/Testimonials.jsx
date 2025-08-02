import React from "react";
import SectionTitle from "../common/SectionTitle";
import testimonialsData from "../../data/testimonials";
import styles from "./Testimonials.module.css";

const Testimonials = ({ id }) => {
  return (
    <section id={id} className={styles.testimonials}>
      <div className="container">
        <SectionTitle
          number="06"
          title="Client Testimonials"
          subtitle="What people say about my work"
        />

        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.quote}>"{testimonial.quote}"</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
