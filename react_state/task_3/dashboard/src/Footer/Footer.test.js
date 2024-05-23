import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Atlas School Tulsa"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Atlas School Tulsa');
  });

  it('does not display the link when the user is logged out within the context', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('displays the link when the user is logged in within the context', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(1);
  });
});
