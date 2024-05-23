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
import listNotifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';


const styles = StyleSheet.create({
  app: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  body: {
    fontSize: "28px",
    alignItems: "center",
    flex: 1,
    padding: "20px",
  },
  footer: {
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "italic",
    padding: "20px",
    borderTop: "4px solid darkblue",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1,
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
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
      displayDrawer: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
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
    handleDisplayDrawer = () => {
      this.setState({ displayDrawer: true });
    };
    handleHideDrawer = () => {
      this.setState({ displayDrawer: false });
    };


  render() {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications, displayDrawer } = this.state;

    return (
      <>
        <Notification listNotifications={listNotifications} 
        isLoggedIn={isLoggedIn}
        displayDrawer={displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
        markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.app)}>
          <Header />
          <main className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Login to continue">
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
