import React, { useEffect, useRef, useState } from 'react';
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

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const socialsRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [now, setNow] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 5000);
      setNow(true);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const hide = () => {
    setIsVisible(false);
  };

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      {shouldRender && (
        <div 
          className={`${styles.intro} ${isVisible ? '' : styles.introHide}`}
          onClick={hide} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
          }}
        >
          <svg className={styles.responsiveSvg} viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet">
            <text x="50" y="100" textAnchor="middle" dominantBaseline="middle" className={`${styles.text} ${styles.textBody}`}>
              Sudip Shrestha
            </text>
          </svg>
          <div>Click to continue</div>
        </div>
      )}
      {!isVisible && (
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
          <div ref={projectsRef}><Projects darkMode={darkMode} /></div>
          <div ref={educationRef}><Education darkMode={darkMode} /></div>
          <div ref={skillsRef}><Skills darkMode={darkMode} /></div>
          <Resume darkMode={darkMode} />
          <div ref={blogsRef}><Blogs darkMode={darkMode} /></div>
          <div ref={socialsRef}><Socials darkMode={darkMode} /></div>
          <ContactForm darkMode={darkMode} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;