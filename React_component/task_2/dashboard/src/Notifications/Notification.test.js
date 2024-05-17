import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul').children().length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('should call the spy with the right message when markAsRead is called', () => {
    const wrapper = shallow(Notifications />);
    const instance = wrapper.instance();

    const consoleSpy = jest.spyOn(console, 'log');

    instance.markAsRead(1);

    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    consoleSpy.mockRestore();
  })
});
