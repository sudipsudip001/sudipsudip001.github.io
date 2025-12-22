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
                        <p>I am <b>Sudip Shrestha.</b></p>
                        <p>a Developer from <strong>Kathmandu, Nepal.</strong></p>
                    </div>
                }
                <div className={styles.more}>
                    <p>
                        I could consider myself curious and invested in the field of AI, especially Deep Learning.
                        Something about it, I find fascinating. Besides that the whole Computer Science domain is
                        in itself a beauty and I consider myself a romantic, cause I like the purity and aesthetics of
                        it, if you know what I mean.
                    </p>
                </div>
            </div>
        </header>
    )
}