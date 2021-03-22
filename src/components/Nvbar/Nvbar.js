import styles from './Nvbar.module.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Cover from './Overlay/Overlay';

function Nvbar(props) {
  return (
    <Nav className={styles.f_col + " justify-content-between"} activeKey="/home">
      <Navbar.Brand href="#home" style={{ marginLeft: '5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src="/fellowship.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '17px', fontWeight: 'bold', paddingLeft: '5px' }}>
            <span>MLH</span>
            <span>Fellowship @ Pod 2.1.2</span>
          </div>
        </div>
      </Navbar.Brand>


      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="primary"
          onClick={(e) => props.toggleAnimatedBackground(e)}
          style={{ height: "38px", paddingBottom: '-5px', marginTop: '3px', marginRight: '3px' }}
        >
          Color
        </Button>



        <div className={styles.nav_set}>
          <Nav.Item className={styles.nav_ele}>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav_ele}>
            <Nav.Link href="#meet">Meet The Pod</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav_ele}>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav_ele}>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav_ele}>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </div>

        <div className={styles.onSmall}>
          <Cover />
        </div>
      </div>
    </Nav >
  );
}

export default Nvbar;

