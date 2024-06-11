import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = [];
  const courseData = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('should return the initial state when no action is passed', () => {
    const result = courseReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should return the data with isSelected set to false when FETCH_COURSE_SUCCESS is passed', () => {
    const expectedData = courseData.map(course => ({ ...course, isSelected: false }));
    const result = courseReducer(initialState, { type: FETCH_COURSE_SUCCESS, data: courseData });
    expect(result).toEqual(expectedData);
  });

  it('should update the isSelected property for the selected course when SELECT_COURSE is passed', () => {
    const initialStateWithData = courseData.map(course => ({ ...course, isSelected: false }));
    const expectedData = initialStateWithData.map((course, index) => {
      if (index === 1) {
        return { ...course, isSelected: true };
      }
      return course;
    });
    const result = courseReducer(initialStateWithData, { type: SELECT_COURSE, index: 1 });
    expect(result).toEqual(expectedData);
  });

  it('should update the isSelected property for the unselected course when UNSELECT_COURSE is passed', () => {
    const initialStateWithData = courseData.map((course, index) => {
      if (index === 1) {
        return { ...course, isSelected: true };
      }
      return { ...course, isSelected: false };
    });
    const expectedData = initialStateWithData.map(course => ({ ...course, isSelected: false }));
    const result = courseReducer(initialStateWithData, { type: UNSELECT_COURSE, index: 1 });
    expect(result).toEqual(expectedData);
  });
});
