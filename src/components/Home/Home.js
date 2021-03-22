import styles from './Home.module.css';
import TypeWriter from 'react-typewriter';

function Home() {
  return (
    <div id="home" className={styles.home1}>
      <div className={styles.clearfloat}></div>
      <img src="bg.png" alt="olaf" />
      <TypeWriter typing={1}>
      <span className={styles.head} style={{color: '#1A46E3', fontWeight: 'bold'}}>Open-Sourced Olaf</span>
      </TypeWriter>
    </div>
  );
}

export default Home;

