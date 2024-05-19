import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
 render() {
   const { type, value, html, markAsRead, id } = this.props;

   const styles = StyleSheet.create({
     default: {
       color: 'blue',
     },
     urgent: {
       color: 'red',
     },
   });

   const notificationItemStyle = type === 'default' ? css(styles.default) : css(styles.urgent);

   return (
     <li
       data-notification-type={type}
       className={notificationItemStyle}
       onClick={() => markAsRead(id)}
       dangerouslySetInnerHTML={html ? { __html: html } : { __html: value }}
     />
   );
 }
}

NotificationItem.propTypes = {
 type: PropTypes.string.isRequired,
 value: PropTypes.string,
 html: PropTypes.shape({
   __html: PropTypes.string,
 }),
 markAsRead: PropTypes.func.isRequired,
 id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

NotificationItem.defaultProps = {
 value: '',
 html: null,
};

export default NotificationItem;
