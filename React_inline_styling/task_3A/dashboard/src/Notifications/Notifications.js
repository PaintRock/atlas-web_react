import React from 'react';
import PropTypes from 'prop-types';
// import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
notificationsContainer: {
  position: 'relative',
},
notificationsPanel: {
  position: 'absolute',
  top: '0',
  right: '0',
  padding: '20px',
  fontSize: '20px',
  '@media (max-width: 900px)': {
    width: '100%',
    height: '100%',
  },
},
menuItem: {
  position: 'fixed',
  padding: '10px',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
  color: '#e1354b',
},
defaultNotificationStyle: {
  color: 'blue',
},
urgentNotificationStyle: {
  color: 'red',
},
});

export default function Notifications({ displayDrawer, listNotifications }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className={css(styles.menuItem)}>Your notifications</div>
      {displayDrawer && (
        <div className={css(styles.notifications)}>
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
          >
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
