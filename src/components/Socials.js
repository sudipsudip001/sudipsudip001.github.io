    import { XLightIcon, XDarkIcon, GitHubDarkIcon, GitHubLightIcon, LinkedInIcon } from "developer-icons";
    import styles from './Socials.module.css';

    export default function Socials({ darkMode }){
        return (
            <>
                <h2 className={styles.text}>Social handles:</h2>
                <div className={styles.socials}>
                    <span className={darkMode? styles.firstDarkLink: styles.firstLink}>
                        <a href="https://x.com/sudipsudip001" >
                            {darkMode? 
                                <XDarkIcon className={styles.xerr} />
                            : <XLightIcon className={styles.lightTwitter} />}
                        </a>
                        <div className={styles.xtitle}>Twitter</div>
                    </span>
                    <span className={darkMode? styles.secondDarkLink: styles.secondLink}>
                        <a href="https://github.com/sudipsudip001" >
                            {darkMode ? 
                                <GitHubDarkIcon className={styles.githubLight} />
                                : <GitHubLightIcon className={styles.lightGithub} />}
                        </a>
                        <div className={styles.gitTitle}>GitHub</div>
                    </span>
                    <span className={darkMode? styles.thirdDarkLink: styles.thirdLink}>
                        <a href="https://www.linkedin.com/in/sudip-shrestha-61b7091aa/" >
                            <LinkedInIcon className={styles.lightLinked} />
                        </a>
                        <div className={styles.linked}>LinkedIn</div>
                    </span>
                </div>
            </>
        );
    }