import React from 'react';
import styles from './ContactForm.module.css';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm({ darkMode }) {
  const [state, handleSubmit] = useForm("mzzpnrlg");
  if (state.succeeded) {
      return <p className={styles.message}>Thanks for your message!</p>;
  }
  return (
    <div className={styles.contact}>
        <h2 className={styles.hello}>Say Hello!</h2>
        <form onSubmit={handleSubmit} className={styles.theForm}>
            <input id="email" type="email" name="email" placeholder="Your email" className={darkMode ? styles.darkMail: styles.mail}/>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" placeholder="Your message" className={darkMode ? styles.darkTexty: styles.texty}/>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting} className={darkMode ? styles.darkSubmitter: styles.submitter}>
                Submit
            </button>
        </form>
    </div>
  );
}