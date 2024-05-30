import React from 'react';
import PropTypes from 'prop-types';
// import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const opacity = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'rotate(0deg)',
  },
  '50%': {
    transform: 'rotate(5deg)',
  },
  '100%': {
    transform: 'rotate(-5deg)',
  },
};

const styles = StyleSheet.create({
notifications: {
  position: 'fixed',
  top: '0',
  right: '0',
  width: '100%',
  height: '100%',
  padding: '0',
  border: 'none',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '20px',
},
NotificationOpened: {
  top: '0',
  left: '0',
  width: '100%',
  height: '100%', 
  padding: '0',
  border: 'none',
  fontSize: '20px',
  justifyContent: 'flex-start',
  alignItems: 'center',
},

menuItem: {
  position: 'fixed',
  padding: '10px',
  top: '20px',
  right: '40px',
  cursor: 'pointer',
  zIndex: 1,
    ':hover': {
      animationName: [opacity, bounce],
      animationDuration: ['1s', '0.2s'],
      animationIterationCount: 'infinite',
    },
  },
  hideMenuItem: {
    display: 'none',
  },

defaultNotificationStyle: {
  color: 'blue',
},
urgentNotificationStyle: {
  color: 'red',
},
});

const Notifications = ({
  listNotifications = [],
  displayDrawer = false,
  handleDisplayDrawer,
  handleHideDrawer,
  isLoggedIn = false, // Destructure isLoggedIn here
  markNotificationAsRead,
}) => {
  const handleClick = () => {
    handleHideDrawer();
    console.log('Close button has been clicked');
  };

  return (
    <>
   {isLoggedIn && !displayDrawer && (
  <div
    className={css(styles.menuItem)}
    onClick={handleDisplayDrawer}
  >
    Your notifications
  </div>
)}
      {displayDrawer && (
        <div className={css(styles.notifications, displayDrawer && styles.NotificationOpened)}>
  
          <button
            style={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-label="Close"
            onClick={handleClick}
          > Close
            <span style={{ fontSize: '30px' }}>&times;</span>
          </button>
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => markNotificationAsRead(notification.id)}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

// Notifications.js
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  isLoggedIn: false,
};
export default Notifications;
