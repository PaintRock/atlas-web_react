import React from 'react';
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
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBody: {
    fontSize: '24px',
    alignItems: 'center',
    flex: 1,
    padding: '20px',
  },
  appFooter: {
    textAlign: 'center',
    fontSize: '20px',
    fontStyle: 'italic',
    padding: '20px',
    borderTop: '4px solid red',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    zIndex: 1,
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '1rem',
  },
  formGroupLabel: {
    marginRight: '0.5rem',
  },
});

class App extends React.Component {
  // ... (rest of the code remains the same)

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses } = this.state;
    return (
      <div className={css(styles.app)}>
        <Notification />
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
        <footer className={css(styles.appFooter)}>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
