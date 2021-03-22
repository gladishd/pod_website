import styles from './Contacts.module.css';

function ContactForm(){
  return(
    <div id="contact" className={styles.frm}>
      <span className={styles.head}>Contact Us</span>
      <div className={styles.contact}>
        <a href="mailto:test@mlh.io" className={styles.links}>
          <i className="far fa-envelope"></i>
          <span className={styles.onSmall}>Email Us</span>
        </a>
        <a href="tel:1234567890" className={styles.links}>
          <i className="fas fa-phone"></i>
          <span className={styles.onSmall}>Call Us</span>
        </a>
      </div>
    </div>
  )
}

export default ContactForm;