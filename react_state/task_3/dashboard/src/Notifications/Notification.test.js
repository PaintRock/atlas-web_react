import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';


beforeEach(() => {
  listNotifications = getLatestNotification();
  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];
}

it('renders without crashing', () => {
  shallow(<Notifications />);
});

it('renders the correct number of NotificationItem components', () => {
  const wrapper = shallow(
    <Notifications
      displayDrawer={true}
      listNotifications={listNotifications}
    />
  );
  expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
});

it('renders the text "Here is the list of notifications"', () => {
  const wrapper = shallow(
    <Notifications
      displayDrawer={true}
      listNotifications={listNotifications}
    />
  );
  expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
});

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('should call the spy with the right message when markAsRead is called', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    const consoleSpy = jest.spyOn(console, 'log');
    instance.markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });

  //call it state change
  it('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
);