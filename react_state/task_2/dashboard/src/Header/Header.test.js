import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { AppContext } from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders a Header component with a default context value, no logoutSection', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('renders a Header component with a user defined (isLoggedIn is true and an email is set)', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('calls the logOut function when clicking on the link', () => {
    const logOutMock = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('a').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});