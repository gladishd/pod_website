import {useRef, useState} from 'react';
import { Overlay, Button, Tooltip, Nav } from 'react-bootstrap';
import styles from './Overlay.module.css';

function Cover() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className={styles.over}>
      <Button ref={target} onClick={() => setShow(!show)}>
        <i className="fas fa-bars"></i>
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <div>
              <Nav.Item>
                <Nav.Link href="#home" onClick={() => setShow(!show)}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="#meet" onClick={() => setShow(!show)}>Meet The Pod</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="#gallery" onClick={() => setShow(!show)}>Gallery</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="#projects" onClick={() => setShow(!show)}>Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="#contact" onClick={() => setShow(!show)}>Contact</Nav.Link>
              </Nav.Item>
            </div>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

export default Cover;