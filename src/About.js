import { useState, useEffect } from "react";
import styles from "./About.module.css";

export default function About(){
    const [showIntro, setShowIntro] = useState(true);
    useEffect(()=>{
        const timer=setTimeout(() => {
            setShowIntro(false);
        }, 6000);
        return ()=>clearTimeout(timer);
    }, []);
    return(
        <header>
            <div className={styles.head}>
                <div className={styles.intro}>
                    {showIntro ? 
                        <>
                            <h1>Hi!!</h1>
                            <p>My name is <b>Sudip Shrestha.</b></p>
                        </>
                    : ''}
                    <p>I'm a Developer from <strong>Kathmandu, Nepal.</strong></p>
                </div>
                <div className={styles.more}>
                    <p>My primary interest lies in Artificial Intelligence specially Deep Learning.
                        I like bringing imaginations to life from my work and being in the intersection of
                        technology and humanity. I love what I do and that includes mostly everything
                        thats possible to do using computers. Web development, game development, app development, embedded programming,... 
                        you name it. My aim is to become one of the greatest programmers ever.
                    </p>
                </div>
            </div>
        </header>
    )
}