    import { XLightIcon, GitHubIcon, LinkedInIcon } from "developer-icons";
    import styles from './Socials.module.css';

    export default function Socials(){
        return (
            <>
                <h2 className={styles.text}>Social handles:</h2>
                <div className={styles.socials}>
                    <span className={styles.link}>
                        <a href="https://x.com/sudipsudip001" >
                            <XLightIcon />
                        </a>
                    </span>
                    <span className={styles.link}>
                        <a href="https://github.com/sudipsudip001" >
                            <GitHubIcon />
                        </a>
                    </span>
                    <span className={styles.link}>
                        <a href="https://www.linkedin.com/in/sudip-shrestha-61b7091aa/" >
                            <LinkedInIcon />
                        </a>
                    </span>
                </div>
            </>
        );
    }