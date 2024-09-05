    import { XLightIcon, XDarkIcon, GitHubIcon, LinkedInIcon } from "developer-icons";
    import styles from './Socials.module.css';

    export default function Socials({ darkMode }){
        return (
            <>
                <h2 className={styles.text}>Social handles:</h2>
                <div className={styles.socials}>
                    <span className={darkMode? styles.darkLink: styles.link}>
                        <a href="https://x.com/sudipsudip001" >
                            {darkMode? 
                                <XDarkIcon />
                            : <XLightIcon />}
                        </a>
                    </span>
                    <span className={darkMode? styles.darkLink: styles.link}>
                        <a href="https://github.com/sudipsudip001" >
                            {darkMode ? 
                                <img src="./images/github_light.png" alt="light image github" className={styles.githubLight} />
                            : <GitHubIcon />}
                        </a>
                    </span>
                    <span className={darkMode? styles.darkLink: styles.link}>
                        <a href="https://www.linkedin.com/in/sudip-shrestha-61b7091aa/" >
                            <LinkedInIcon />
                        </a>
                    </span>
                </div>
            </>
        );
    }