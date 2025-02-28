import { useState } from "react";
import styles from "./Project.module.css";

export default function Projects({ darkMode }) {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: "plant disease detection FYP",
      link: "https://github.com/sudipsudip001/plant_disease_detection_FYP",
      description:
        "A mobile application for platn disease detection as part of my final year project for Computer Science degree.",
    },
    {
      id: 1,
      name: "nepali_digit_NN",
      link: "https://github.com/sudipsudip001/nepali_digit_NN",
      description:
        "A nepali handwritten digit recognizing Neural Network written in Numpy.",
    },
    {
      id: 2,
      name: "multimodal_llm",
      link: "https://github.com/sudipsudip001/multimodal_llm",
      description:
        "A finetuned Llama-3 for bank customer service that can handle both text and audio inputs.",
    },
    {
      id: 3,
      name: "dinosaur game automation",
      link: "https://github.com/sudipsudip001/allOfAutomation/tree/main/dinosaur%20game%20automator",
      description:
        "An automation bot written in Python that can automatically play the Classic dinosaur game using Template Matching.",
    },
  ]);
  return (
    <>
      <h2 className={styles.name}>Projects: </h2>
      <div className={darkMode ? styles.darkOuterDiv : styles.outerDiv}>
        {projects.map((project) => (
          <a
            href={project.link}
            className={darkMode ? styles.darkerElement : styles.element}
          >
            <div
              className={darkMode ? styles.darkProjectList : styles.projectList}
              key={project.id}
            >
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
