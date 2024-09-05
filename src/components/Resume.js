import styles from './Resume.module.css';

export default function Resume(){
    return (
        <div className={styles.link}>
            <a href={'/resume/sudip.pdf'} className={styles.linkText} download>
                Download my resume
            </a>
        </div>
    )
}