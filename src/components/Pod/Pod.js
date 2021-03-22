import styles from './Pod.module.css';
import  {Container} from 'react-bootstrap';
import PodCard from './PodCard/PodCard';
import * as profile_data from '../../_data/teams.json'; 

function MeetThePod() {

  const podList = profile_data.default.map((member,i) => {
    return <PodCard key={i} name={member.name} country={member.country} school={member.school} links={member.links} image={member.image}/>
  });

  return (
    <Container id="meet" className={styles.team}>
      <span className={styles.head}>Meet the Pod</span>
      <div className={styles.team_flex}>
        {podList};
      </div>
    </Container>
  );
}

export default MeetThePod;

