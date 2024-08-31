import styles from './Education.module.css';

export default function Education(){
    return ( 
        <div className={styles.outer}>
            <h2 className={styles.text}>Education:</h2>
            <span className={styles.details}>
                <span><b>2021-present:</b> B.Sc. CSIT at Amrit Science Campus, Kathmandu <br /><br /></span>
                <span><b>2019-2020:</b> +2, Science at Prasadi Academy, Lalitpur <br /><br /></span>
                <span><b>2011-2018:</b> Secondary levels at Sainik Awasiya Mahavidyalaya, Pokhara <br /><br /></span>
            </span>
        </div>
    );
}