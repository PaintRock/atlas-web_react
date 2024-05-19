import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
// import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  courseListThv: {
    padding: '8px',
    textAlign: 'center',
    border: '10px solid black',
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  courseListTh: {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid black',
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  courseListTd: {
    padding: '8px',
    textAlign: 'left',
    border: '1px solid black',
  },
  courseListTrHover: {
    ':hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  courseListTheadTrFirstChild: {
    textAlign: 'center',
  },
  tableContainer: {
    marginBottom: '20px',
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <div className={css(styles.tableContainer)}>
      <table id="CourseList" className={css(styles.courseList)}>
        <thead>
          <tr className={css(styles.courseListTheadTrFirstChild)}>
            <th className={css(styles.courseListThv)}>Available courses</th>
          </tr>
          <tr>
            <th className={css(styles.courseListTh)}>Course name</th>
            <th className={css(styles.courseListTh)}>Credit</th>
          </tr>
        </thead>
        <tbody>
          {listCourses.length === 0 && (
            <CourseListRow textFirstCell="No course available yet" />
          )}
          {listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              className={css(styles.courseListTrHover)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;


