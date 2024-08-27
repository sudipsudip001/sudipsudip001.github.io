import { HTML5Icon, JavaScriptIcon, CSS3Icon, ReactIcon, FlaskIcon, PyTorchIcon, PythonIcon } from "developer-icons"
import styles from './Skills.module.css';

export default function Skills(){
    return(
        <>
            <h2 className={styles.text}>Skills:</h2>
            <div className={styles.skills}>
                <HTML5Icon className={styles.html} />
                <JavaScriptIcon className={styles.js} />
                <CSS3Icon className={styles.css} />
                <ReactIcon className={styles.react} />
                <PythonIcon className={styles.python} />
                <FlaskIcon className={styles.flask} />
                <PyTorchIcon className={styles.pytorch} />
            </div>
        </>
    )
}