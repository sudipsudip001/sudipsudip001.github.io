import { CIcon, HTML5Icon, JavaScriptIcon, CSS3Icon, ReactIcon, FlaskDarkIcon, FlaskLightIcon, PyTorchIcon, PythonIcon } from "developer-icons"
import styles from './Skills.module.css';

export default function Skills({ darkMode }){
    return(
        <>
            <h2 className={styles.text}>Tech stack:</h2>
            <div className={styles.skills}>
                <CIcon className={styles.C} />
                <PythonIcon className={styles.python} />
                {darkMode? 
                    <FlaskDarkIcon className={styles.darkFlask} />
                : <FlaskLightIcon className={styles.flask} />}
                <PyTorchIcon className={styles.pytorch} />
                <HTML5Icon className={styles.html} />
                <CSS3Icon className={styles.css} />
                <JavaScriptIcon className={styles.js} />
                <ReactIcon className={styles.react} />
            </div>
        </>
    )
}