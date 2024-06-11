import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
describe('CourseListRow when isHeader is true', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Test" />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').props().colSpan).toEqual(2);
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Test"
        textSecondCell="Test2"
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('Test');
    expect(wrapper.find('th').at(1).text()).toEqual('Test2');
  });
});

describe('CourseListRow when isHeader is false', () => {
  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Test"
        textSecondCell="Test2"
      />
    );
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('tr').children('td')).toHaveLength(2);
  });
});
