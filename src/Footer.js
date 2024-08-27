import { useState, useEffect } from "react";
import styles from './Footer.module.css'

export default function Footer(){
    const [show, setShow] = useState(true);
    useEffect(()=>{
        const timer = setInterval(() => {
            setShow(!show);
        }, 1000);
        return ()=>clearInterval(timer);
    }, [show]);
    return (
        <div className={styles.creator}>
            <p>Made with&nbsp;</p>
            <span style={{ display: 'flex', width: '1em', height: '1em' }}>
                {show ? <span className='heart'>❤️</span> : null}
            </span>
            <p className='copyright'>&nbsp; by &copy; Sudip Shrestha, 2024</p>
        </div>
    );
}