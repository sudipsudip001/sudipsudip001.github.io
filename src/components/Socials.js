import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Socials.module.css';

export default function Socials({ darkMode }){
    return (
        <>
            <h2 className={styles.text}>Social handles:</h2>
            <div className={styles.socials}>
                <span className={darkMode? styles.firstDarkLink: styles.firstLink}>
                    <a href="https://x.com/sudipsudip001" >
                        <FaXTwitter title="X" className={darkMode ? styles.xDark: styles.x} />
                    </a>
                    {/* <div className={styles.xtitle}>X</div> */}
                </span>
                <span className={darkMode? styles.secondDarkLink: styles.secondLink}>
                    <a href="https://github.com/sudipsudip001" >
                        <FaGithub title="GitHub" className={darkMode ? styles.githubDark: styles.github} />
                    </a>
                    {/* <div className={styles.gitTitle}>GitHub</div> */}
                </span>
                <span className={darkMode? styles.thirdDarkLink: styles.thirdLink}>
                    <a href="https://www.linkedin.com/in/sudip-shrestha-61b7091aa/" >
                        <FaLinkedin title="LinkedIn" className={darkMode ? styles.linkedInDark: styles.linkedIn} />
                    </a>
                    {/* <div className={styles.linked}>LinkedIn</div> */}
                </span>
            </div>
        </>
    );
}
