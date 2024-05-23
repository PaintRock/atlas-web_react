export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isLoggedIn) {
    if (isLoggedIn) {
      return 'Contact us';
    } else {
    return isIndex ? 'Atlas School Tulsa - Copyright' : 'Atlas School main dashboard -- Copyright';
  }getFooterCopy(true);
}
  export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
  }