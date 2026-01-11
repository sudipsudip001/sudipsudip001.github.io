import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Resume from "./components/Resume.js";
import Blogs from "./components/Blogs.js";
import Socials from "./components/Socials.js";
import Footer from "./components/Footer.js";
import Education from "./components/Education.js";
import styles from "./App.module.css";
import ContactForm from "./components/ContactForm.js";

const App = () => {
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const socialsRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [now, setNow] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (true) {
      const timer = setTimeout(() => {
      }, 5000);
      setNow(true);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <>
        <Navbar
          scrollToSection={scrollToSection}
          projectsRef={projectsRef}
          educationRef={educationRef}
          skillsRef={skillsRef}
          blogsRef={blogsRef}
          socialsRef={socialsRef}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <About now={now} darkMode={darkMode} />
        <div ref={projectsRef}>
          <Projects darkMode={darkMode} />
        </div>
        <div ref={educationRef}>
          <Education darkMode={darkMode} />
        </div>
        <div ref={skillsRef}>
          <Skills darkMode={darkMode} />
        </div>
        <Resume darkMode={darkMode} />
        <div ref={blogsRef}>
          <Blogs darkMode={darkMode} />
        </div>
        <div ref={socialsRef}>
          <Socials darkMode={darkMode} />
        </div>
        <ContactForm darkMode={darkMode} />
        <Footer />
      </>
    </div>
  );
};

export default App;
