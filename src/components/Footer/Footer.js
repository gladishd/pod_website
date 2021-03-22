import specialstyles from './Footer.module.scss';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={specialstyles.outOfThisWorld}>
      <div className={styles.foot}>
        <span className={styles.power}>Powered by</span>
        <img src="/mlh.svg" className={styles.icon}></img>
      </div>
    </div>
  )
}

export default Footer;
