import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of CourseListRow components based on the listCourses prop', () => {
    const listCourses = [
      { id: 1, name: 'Course 1', credit: 3 },
      { id: 2, name: 'Course 2', credit: 4 },
      { id: 3, name: 'Course 3', credit: 2 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length);
  });

  it('renders the CourseListRow component with "No course available yet" when listCourses is empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow).prop('textFirstCell')).toBe('No course available yet');
  });

  it('passes the correct props to CourseListRow component', () => {
    const listCourses = [
      { id: 1, name: 'Course 1', credit: 3 },
      { id: 2, name: 'Course 2', credit: 4 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).at(0).prop('textFirstCell')).toBe('Course 1');
    expect(wrapper.find(CourseListRow).at(0).prop('textSecondCell')).toBe(3);
    expect(wrapper.find(CourseListRow).at(1).prop('textFirstCell')).toBe('Course 2');
    expect(wrapper.find(CourseListRow).at(1).prop('textSecondCell')).toBe(4);
  });
});