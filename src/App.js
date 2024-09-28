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
import ContactForm from './components/ContactForm.js';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isIntroFading, setIsIntroFading] = useState(false);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const socialsRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleIntroClick = () => {
    setIsIntroFading(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 1500);
  }
  return (
    <>
      {showIntro ? (
        <div className={`${styles.intro} ${isIntroFading ? styles.hidden: ''}`} onClick={handleIntroClick}>
          <svg className={styles.responsiveSvg} viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet">
            <text x="60" y="120" textAnchor="middle" dominantBaseline="middle" className={`${styles.text} ${styles.textBody}`}>
              Sudip Shrestha
            </text>
          </svg>
          Click to continue
        </div>
      ) : (
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
          <div><About darkMode={darkMode} /></div>
          <div ref={projectsRef}><Projects darkMode={darkMode} /></div>
          <div ref={educationRef}><Education darkMode={darkMode} /></div>
          <div ref={skillsRef}><Skills darkMode={darkMode} /></div>
          <div><Resume darkMode={darkMode} /></div>
          <div ref={blogsRef}><Blogs darkMode={darkMode} /></div>
          <div ref={socialsRef}><Socials darkMode={darkMode} /></div>
          <div><ContactForm darkMode={darkMode} /></div>
          <Footer />
        </div>
      )}
    </>
  );
}