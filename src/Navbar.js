import React from 'react';
import styles from "./Navbar.module.css";

export default function Navbar({ scrollToSection, aboutRef, projectsRef, skillsRef, resumeRef, blogsRef, socialsRef }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src="./images/boy.jpeg" alt='random picture from the internet' className={styles.image}/>
            </div>
            <div className={styles['nav-links']}>
                <button onClick={() => scrollToSection(aboutRef)} className={styles.link}>About</button>
                <button onClick={() => scrollToSection(projectsRef)} className={styles.link}>Projects</button>
                <button onClick={() => scrollToSection(skillsRef)} className={styles.link}>Skills</button>
                <button onClick={() => scrollToSection(resumeRef)} className={styles.link}>Resume</button>
                <button onClick={() => scrollToSection(blogsRef)} className={styles.link}>Blogs</button>
                <button onClick={() => scrollToSection(socialsRef)} className={styles.link}>Socials</button>
            </div>
        </nav>
    );
}