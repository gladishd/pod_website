import styles from './ProjectCard.module.css';
import {Row, Col, Badge, Button} from 'react-bootstrap';

function ProjectCard(props){
  const badgeList = ["primary", "secondary", "success", "danger", "warning", "light"];

  const assignBadge = props.tech.map((ele,i)=>{
    let selectStyle = badgeList[Math.floor(Math.random() * badgeList.length)];
    return <Badge key= {i} variant={selectStyle} className={styles.tech_stk}>{ele}</Badge>;
  });

  const links = Object.keys(props.links).map((link,i) => {
    return <Button key={i} href={props.links[link]} variant="info" className={styles.tech_stk}>{link}</Button>;
  })

  return (
    <Row className={styles.r}>
      <Col className={styles.c}>
        <img className={styles.pic} src={props.image}/>
      </Col>
      <Col className={styles.c}>
        <div>
          <span className={styles.title}>{props.title}</span>
          <div className={styles.projDes}>
            <span className={styles.des}>Description</span>
            <p>{props.description}</p>
          </div>
          <div>
            <span className={styles.des}>Tech Stack</span>
            <p>
              {assignBadge}
            </p>
          </div>
          <div>
            <span className={styles.des}>Links</span>
            <p>
              {links}
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProjectCard;