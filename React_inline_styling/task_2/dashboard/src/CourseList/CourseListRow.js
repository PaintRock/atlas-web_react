import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  headerStyle: {
    backgroundColor: '#deb5b545',
  },
  tableCell: {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid black',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan={2} className={css(styles.tableCell, styles.headerStyle)}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className={css(styles.tableCell, styles.headerStyle)}>{textFirstCell}</th>
          <th className={css(styles.tableCell, styles.headerStyle)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styles.rowStyle)}>
        <td className={css(styles.tableCell)}>{textFirstCell}</td>
        <td className={css(styles.tableCell)}>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
