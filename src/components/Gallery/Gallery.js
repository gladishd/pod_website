import { Carousel } from 'react-bootstrap';
import styles from './Gallery.module.css';
import * as gallery_data from '../../_data/gallery.json';

function Gallery() {

  const galleryList = gallery_data.default.map((item, i) => {
    return (
      <Carousel.Item key={i} interval={1700}>
        <img
          className="d-block w-100"
          src={item.imgLink}
          alt={item.title}
          style={{
            height: '100vh',
            width: '100%',
            objectFit: 'contain'
          }}
        />
      </Carousel.Item>
    )
  });

  return (
    <div id="gallery" className={styles.head}>
      <span className={styles.title}>Gallery</span>
      <Carousel className={styles.carou}>
        {galleryList}
      </Carousel>
    </div>
  )
}

export default Gallery;
