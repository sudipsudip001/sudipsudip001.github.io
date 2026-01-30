
import styles from "./Project.module.css";

export default function Projects({ darkMode }) {
  const projects = [
    {
      id: 0,
      name: "plant disease detection FYP",
      link: "https://github.com/sudipsudip001/plant_disease_detection_FYP",
      description:
        "A mobile application for plant disease detection as part of my final year project for Computer Science degree.",
    },
    {
      id: 1,
      name: "Football Commentary Generation",
      link: "https://github.com/fuseai-fellowship/Football-Commentary-Generation",
      description:
        "A football commentary generation project as part of my FuseMachines fellowship that used Object identification, tracking, event detection and LLMs to generate natural sounding commentary.",
    },
    {
      id: 2,
      name: "Convolutional Neural Network from Scratch",
      link: "https://github.com/sudipsudip001/CNN-scratcher",
      description:
        "In this project I attempted to implement Convolutional Neural Network from scratch. It includes implementing both the forward and backward pass of CNN algorithm.",
    },
    {
      id: 3,
      name: "Heart Disease Prediction",
      link: "https://github.com/sudipsudip001/hearting",
      description:
        "A web application to predict whether a person is suffering from heart disease given different values.",
    },
    {
      id: 4,
      name: "Spam Message Detection",
      link: "https://github.com/sudipsudip001/spam-ham",
      description:
        "A web application that predicts whether the message is spam or not by using NLP techniques.",
    },
    {
      id: 5,
      name: "nepali_digit_NN",
      link: "https://github.com/sudipsudip001/nepali_digit_NN",
      description:
        "A nepali handwritten digit recognizing Neural Network written in Numpy.",
    },
    {
      id: 6,
      name: "multimodal_llm",
      link: "https://github.com/sudipsudip001/multimodal_llm",
      description:
        "A finetuned Llama-3 for bank customer service that can handle both text and audio inputs.",
    },
    {
      id: 7,
      name: "dinosaur game automation",
      link: "https://github.com/sudipsudip001/allOfAutomation/tree/main/dinosaur%20game%20automator",
      description:
        "An automation bot written in Python that can automatically play the Classic dinosaur game using Template Matching.",
    },
  ];
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
