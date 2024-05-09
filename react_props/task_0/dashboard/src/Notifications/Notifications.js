import React from 'react';
import './Notifications.css';
// import { getLatestNotification } from '../utils/utils';
// import PropTypes from 'prop-types';
// import NotificationItem from './NotificationItem';
// import NotificationItemShape from './NotificationItemShape';


export default function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div className="Notifications">
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
      {/* Rest of the code */}
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
