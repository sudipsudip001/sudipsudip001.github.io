import { useState, useEffect } from "react";
import styles from "./About.module.css";

export default function About({ now, darkMode }){
    const [showIntro, setShowIntro] = useState(true);
    const [deleteView, setDeleteView] = useState(false);
    useEffect(()=>{
        if(now){
            const timer = setTimeout(() => {
                setShowIntro(false);
            }, 6500);
            const deleteTimer = setTimeout(() => {
                setDeleteView(true);
            }, 8000);
            return ()=>{
                clearTimeout(timer);
                clearTimeout(deleteTimer);
            };
        }
    }, [now]);
    return(
        <header>
            <div className={styles.head}>
                {!deleteView && 
                    <div className={`${darkMode? styles.darkIntro: styles.intro} ${showIntro ? styles.fadeIn : styles.fadeOut}`}>
                        <h1>Hi!!</h1>
                        <p>My name is <b>Sudip Shrestha.</b></p>
                        <p>I'm a Developer from <strong>Kathmandu, Nepal.</strong></p>
                    </div>
                }
                <div className={styles.more}>
                    <p>My primary interest lies in Artificial Intelligence specially Deep Learning.
                        I like bringing imaginations to life from my work and being in the intersection of
                        technology and humanity. I love what I do and that includes mostly everything
                        thats possible to do using computers. Web development, game development, app development, embedded programming, ... 
                        you name it. I aim to become a great programmer.
                    </p>
                </div>
            </div>
        </header>
    )
}