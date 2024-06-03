import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
  defaultPriority: {
    color: 'blue',
  },
  urgentPriority: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    let listItem;

    if (html) {
      listItem = (
        <li
          className={css(styles.item, type === 'urgent' ? styles.urgentPriority : styles.defaultPriority)}
          data-notification-type={type}
          onClick={() => markAsRead(id)}
          dangerouslySetInnerHTML={html}
        ></li>
      );
    } else {
      listItem = (
        <li
          className={css(styles.item, type === 'urgent' ? styles.urgentPriority : styles.defaultPriority)}
          data-notification-type={type}
          onClick={() => markAsRead(id)}
        >
          {value}
        </li>
      );
    }

    return listItem;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
