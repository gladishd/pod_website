import styles from './App.module.scss';
import { default as Home } from './components/Home/Home';
import { default as MeetThePod } from './components/Pod/Pod';
import { default as Projects } from './components/Projects/Projects';
import { default as Nvbar } from './components/Nvbar/Nvbar';
import { default as Footer } from './components/Footer/Footer';
import { default as ContactForm } from './components/Contacts/Contacts';
import { default as Gallery } from './components/Gallery/Gallery';
import { default as Snow } from './components/snow.js';
import { Container } from 'react-bootstrap';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimatedBackground: false,
    }
    this.toggleAnimatedBackground = this.toggleAnimatedBackground.bind(this);
  }

  toggleAnimatedBackground(e) {
    e.preventDefault();
    this.setState({ showAnimatedBackground: !this.state.showAnimatedBackground })
    console.log(this.state.showAnimatedBackground)
  }

  render() {
    return (
      <>
        <div className={this.state.showAnimatedBackground ? styles.block : ""}>
          <Nvbar showAnimatedBackground={this.state.showAnimatedBackground} toggleAnimatedBackground={this.toggleAnimatedBackground} />
          <Container fluid>
            <div className={styles.break} />
            <div className={styles.beginning} />
            <Snow/>
            <Home />
            <MeetThePod />
            <Gallery />
            <Projects />
            <div className={styles.f_center}>
              <ContactForm />
            </div>
          </Container>
          <div className={styles.end} />
          <Footer />
        </div>
      </>
    );
  }

}

export default App;

