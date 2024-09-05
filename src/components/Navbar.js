import styles from "./Navbar.module.css";

export default function Navbar({ scrollToSection, projectsRef, educationRef, skillsRef, blogsRef, socialsRef, darkMode, setDarkMode }) {
    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    {darkMode? 
                        <img src="./images/night.png" alt='random picture from the internet' className={styles.image}/>
                    : <img src="./images/koala.png" alt='random picture from the internet' className={styles.image}/>}
                </div>
                <div className={darkMode? styles['nav-darkLink']: styles['nav-links']}>
                    <button onClick={handleThemeToggle}>
                        <img src={darkMode? './images/bulbOff.png': "./images/bulb.png"} alt='bult photo for turning lights on/off' className={darkMode? styles.bulbOff: styles.bulbOn} />
                    </button>
                    <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
                    <button onClick={() => scrollToSection(educationRef)}>Education</button>
                    <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
                    <button onClick={() => scrollToSection(blogsRef)}>Blogs</button>
                    <button onClick={() => scrollToSection(socialsRef)}>Socials</button>
                </div>
            </nav>
        </>
    );
}