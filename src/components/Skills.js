import { SiFlask, SiPytorch, SiC, SiFastapi } from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import styles from './Skills.module.css';

export default function Skills({ darkMode }){
    return(
        <>
            <h2 className={styles.text}>Tech stack:</h2>
            <div className={styles.skills}>
                <SiC className={styles.C} title="C" />
                <FaPython className={styles.python} title="Python" />
                <SiFlask className={styles.flask} title="Flask" />
                <SiFastapi className={styles.fastapi} title="FastAPI" />
                <SiPytorch className={styles.pytorch} title="PyTorch" />
                <IoLogoJavascript className={styles.js} title="JavaScript" />
                <FaReact className={styles.react} title="React" />
            </div>
        </>
    )
}
