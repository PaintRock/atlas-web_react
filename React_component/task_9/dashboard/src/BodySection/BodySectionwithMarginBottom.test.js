import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom component tests', () => {
  it('should render correctly a BodySection component and pass the props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).props().title).toEqual('test title');
    expect(wrapper.find(BodySection).props().children.type).toEqual('p');
    expect(wrapper.find(BodySection).props().children.props.children).toEqual('test children node');
  });
});
