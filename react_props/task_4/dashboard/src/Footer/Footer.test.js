import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Atlas School Tulsa"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Atlas School Tulsa');
  });
});
