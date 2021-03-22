import {Card, Image} from 'react-bootstrap';
import styles from './PodCard.module.css';

function PodCard(props){
  const links= [
    <a key={props.name} style={{fontSize:'1.5rem', margin:'0.5rem'}} href={props.links.github}><i className="fab fa-github"></i></a>,
    <a key={props.country}  style={{fontSize:'1.5rem', margin:'0.5rem'}} href={props.links.linkedin}><i className="fab fa-linkedin"></i></a>
  ]
  return (
    <Card style={{ width: '14rem', position:'inherit' }} className={styles.card_set}>
      <Image className={styles.half1} src={props.image} style={{margin: '1.5rem'}} roundedCircle />
      <Card.Body className={styles.half2}>
        <div>
          <span className={styles.card_info + " " + styles.name}>{props.name}</span>
          <span className={styles.card_info}>{props.country}</span>
          <span className={styles.card_info}>{props.school}</span>
        </div>
        {links}
      </Card.Body>
    </Card>
  )

}

export default PodCard