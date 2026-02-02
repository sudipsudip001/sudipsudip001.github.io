import { SiPytorch, SiFastapi } from "react-icons/si";
import { FaPython, } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import styles from './Skills.module.css';

export default function Skills({ darkMode }){
    return(
        <>
            <h2 className={styles.text}>Tech stack:</h2>
            <div className={styles.skills}>
                <FaPython className={styles.python} title="Python" />
                <SiFastapi className={styles.fastapi} title="FastAPI" />
                <SiPytorch className={styles.pytorch} title="PyTorch" />
                <FaGitAlt className={styles.fastapi} title="Git" />
            </div>
        </>
    )
}
