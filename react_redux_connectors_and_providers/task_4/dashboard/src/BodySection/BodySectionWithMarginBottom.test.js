import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('BodySectionWithMarginBottom component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('BodySection').props().title).toBe('test title');
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
