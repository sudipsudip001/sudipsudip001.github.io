import styles from "./Navbar.module.css";

export default function Navbar({ scrollToSection, projectsRef, educationRef, skillsRef, blogsRef, socialsRef, darkMode, setDarkMode }) {
    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div>
                    {darkMode? 
                        <img src="./images/koala_night.png" alt='sleeping koala' className={styles.imageDark}/>
                    : <img src="./images/koala.png" alt='koala image' className={styles.image}/>}
                </div>
                <div className={darkMode? styles['nav-darkLink']: styles['nav-links']}>
                    <button onClick={handleThemeToggle}>
                        <img src={darkMode? './images/bulbOff.png': "./images/bulb.png"} alt='bulb images' className={darkMode? styles.bulbOff: styles.bulbOn} />
                    </button>
                    <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
                    <button onClick={() => scrollToSection(educationRef)}>Education</button>
                        <button onClick={() => scrollToSection(skillsRef)} className={styles.skill}>Skills</button>
                    <button onClick={() => scrollToSection(blogsRef)} className={styles.blog}>Blogs</button>
                    <button onClick={() => scrollToSection(socialsRef)} className={styles.social}>Socials</button>
                </div>
            </nav>
        </>
    );
}