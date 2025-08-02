import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Education id="education" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
