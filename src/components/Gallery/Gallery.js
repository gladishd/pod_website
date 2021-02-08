import {Carousel} from 'react-bootstrap';
import styles from './Gallery.module.css';
import * as gallary_data from '../../_data/gallery.json'; 

function Gallary() {

  const gallaryList = gallary_data.default.map((item,i)=>{
    return(
      <Carousel.Item key={i} interval={1700}>
        <img
          className="d-block w-100"
          src={item.imgLink}
          alt={item.title}
        />
      </Carousel.Item>
    )
  });

  return (
    <div id="gallery" className={styles.head}>
      <span className={styles.title}>Gallary</span>
      <Carousel className={styles.carou}>
        {gallaryList}
      </Carousel>
    </div>
  )
}

export default Gallary;