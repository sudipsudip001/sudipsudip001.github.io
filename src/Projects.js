import { useState } from "react";
import styles from './Project.module.css';

export default function Projects(){
    const [projects, setProjects] = useState([
        {id: 0, name: 'nepali_digit_NN', link: 'https://github.com/sudipsudip001/nepali_digit_NN', description: 'A nepali handwritten digit recognizing Neural Network written in Numpy.'},
        {id: 1, name: 'multimodal_llm', link: 'https://github.com/sudipsudip001/multimodal_llm', description: 'A finetuned Llama-3 for bank customer service that can handle both text and audio inputs.'},
        {id: 2, name: 'dinosaur game automation', link: 'https://github.com/sudipsudip001/allOfAutomation/tree/main/dinosaur%20game%20automator', description: 'An automation bot written in Python that can automatically play the Classic dinosaur game using Template Matching.'},
        {id: 3, name: 'auto_email', link: 'https://github.com/sudipsudip001/allOfAutomation/tree/main/auto_email', description: 'Automation bot to make sending emails easy.'},
        {id: 4, name: 'weather_app', link: 'https://github.com/sudipsudip001/react_miniProjects/tree/main/weather_app', description: 'Shows weather of city you type.'},
        {id: 5, name: 'todo', link: 'https://github.com/sudipsudip001/react_miniProjects/tree/main/todo-app', description: 'A react todo app.'},
        {id: 6, name: 'recipe_finder', link: 'https://github.com/sudipsudip001/react_miniProjects/tree/main/recipe-finder', description: 'React app for Recipe CRUD operation.'},
    ])
    return(
        <>
            <h2 className={styles.name}>Projects: </h2>
            <div className={styles.outerDiv}>
                {projects.map(project=>
                    <a href={project.link} className={styles.element}>
                        <div className={styles.projectList} key={project.id}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                        </div>
                    </a>
                )}
            </div>
        </>
    )
}