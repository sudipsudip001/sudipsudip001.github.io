import styles from './Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.creator}>
            <p>Made with &nbsp;</p>
            <span className={styles.animate}>❤️</span>
            <p className='copyright'>&nbsp; by &copy; Sudip Shrestha, 2024</p>
        </div>
    );
}