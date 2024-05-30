import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  headerStyle: {
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const rowStyles = isHeader
    ? styles.headerStyle
    : isChecked
    ? styles.rowChecked
    : styles.rowStyle;

  const renderCourseNamesAndCheckbox = () => {
    if (!isHeader) {
      return (
        <td>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
      );
    }
    return <th>{textFirstCell}</th>;
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(rowStyles)}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(rowStyles)}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(rowStyles)}>
        {renderCourseNamesAndCheckbox()}
        <td>{textSecondCell}</td>
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