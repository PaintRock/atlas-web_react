import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

const boundCourseActions = bindActionCreators(
  {
    selectCourse,
    unSelectCourse,
  },
  dispatch
);

export default boundCourseActions;