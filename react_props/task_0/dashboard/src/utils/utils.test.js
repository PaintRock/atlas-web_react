import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  test('getFooterCopy returns the correct string when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Atlas School Tulsa');
  });

  test('getFooterCopy returns the correct string when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('Atlas School main dashboard');
  });

  test('getLatestNotification returns the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
