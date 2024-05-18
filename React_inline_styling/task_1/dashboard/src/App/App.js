import React from 'react';
// import './App.css';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notification from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, sans-serif',
  },
  appBody: {
    marginTop: '1rem',
    marginBottom: '1rem',
    nimHeight: '100vh',
  },
});

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: true,
    logOut: () => {},
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses } = this.state;

    return (
      <>
        <Notification />
        <div className={css(styles.app)}>
          <Header />
          <main className={css(styles.appBody)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Some random text</p>
            </BodySection>
          </main>
          <footer className={css(styles.footer)}>
          <Footer />
          </footer>
        </div>
      </>
    );
  }
}

export default App;
