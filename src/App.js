import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Resume from './components/Resume.js';
import Blogs from './components/Blogs.js';
import Socials from './components/Socials.js';
import Footer from './components/Footer.js';
import Education from './components/Education.js';
import styles from './App.module.css';

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const blogsRef = useRef(null);
  const socialsRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  // };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={darkMode? styles.dark: styles.light}>
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
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <div ref={aboutRef}><About darkMode={darkMode} /></div>
      <div ref={projectsRef}><Projects darkMode={darkMode} /></div>
      <div ref={educationRef}><Education darkMode={darkMode} /></div>
      <div ref={skillsRef}><Skills darkMode={darkMode} /></div>
      <div ref={resumeRef}><Resume darkMode={darkMode} /></div>
      <div ref={blogsRef}><Blogs darkMode={darkMode} /></div>
      <div ref={socialsRef}><Socials darkMode={darkMode} /></div>
      <Footer />
    </div>
  );
}