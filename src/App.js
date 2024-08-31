import React, { useRef } from 'react';
import Navbar from './Navbar.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Resume from './Resume.js';
import Blogs from './Blogs.js';
import Socials from './Socials.js';
import Footer from './Footer.js';
import Education from './Education.js';

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const blogsRef = useRef(null);
  const socialsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        skillsRef={skillsRef}
        resumeRef={resumeRef}
        blogsRef={blogsRef}
        socialsRef={socialsRef}
      />
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={resumeRef}><Resume /></div>
      <div ref={blogsRef}><Blogs /></div>
      <div ref={socialsRef}><Socials /></div>
      <Footer />
    </>
  );
}