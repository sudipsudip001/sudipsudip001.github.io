import { HTML5Icon, JavaScriptIcon, CSS3Icon, ReactIcon, FlaskIcon, PyTorchIcon, PythonIcon } from "developer-icons"
import styles from './Skills.module.css';

export default function Skills(){
    return(
        <>
            <h2 className={styles.text}>Tech stack:</h2>
            <div className={styles.skills}>
                <img src="./images/c.png" alt="C programming logo" className={styles.C} />
                <PythonIcon className={styles.python} />
                <FlaskIcon className={styles.flask} />
                <PyTorchIcon className={styles.pytorch} />
                <HTML5Icon className={styles.html} />
                <CSS3Icon className={styles.css} />
                <JavaScriptIcon className={styles.js} />
                <ReactIcon className={styles.react} />
            </div>
        </>
    )
}