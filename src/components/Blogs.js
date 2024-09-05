import { useEffect, useState } from 'react';
import styles from './Blogs.module.css';

export default function Blogs(){
    const [firstDot, setFirstDot] = useState(true);
    useEffect(()=>{
        const timer=setInterval(() => {
            setFirstDot(!firstDot);
        }, 1000);
        return ()=> clearInterval(timer);
    },[firstDot]);
    return (
        <div className={styles.blogger}>
            <h2 className={styles.header}>Blogs:</h2>
            <div className='text'>
                Coming soon{firstDot ? '...' : ''}
            </div>
        </div>
    );
}