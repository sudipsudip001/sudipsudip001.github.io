import { useState } from "react";
import styles from './Project.module.css';

export default function Projects({ darkMode }){
    const [projects, setProjects] = useState([
        {id: 0, name: 'nepali_digit_NN', link: 'https://github.com/sudipsudip001/nepali_digit_NN', description: 'A nepali handwritten digit recognizing Neural Network written in Numpy.'},
        {id: 1, name: 'multimodal_llm', link: 'https://github.com/sudipsudip001/multimodal_llm', description: 'A finetuned Llama-3 for bank customer service that can handle both text and audio inputs.'},
        {id: 2, name: 'dinosaur game automation', link: 'https://github.com/sudipsudip001/allOfAutomation/tree/main/dinosaur%20game%20automator', description: 'An automation bot written in Python that can automatically play the Classic dinosaur game using Template Matching.'},
    ])
    return(
        <>
            <h2 className={styles.name}>Projects: </h2>
            <div className={darkMode? styles.darkOuterDiv: styles.outerDiv}>
                {projects.map(project=>
                    <a href={project.link} className={darkMode? styles.darkerElement: styles.element}>
                        <div className={darkMode? styles.darkProjectList : styles.projectList} key={project.id}>
                                <h3 className={styles.projectName}>{project.name}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                        </div>
                    </a>
                )}
            </div>
        </>
    )
}