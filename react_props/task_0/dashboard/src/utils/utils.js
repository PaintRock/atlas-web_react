export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Atlas School Tulsa' : 'Atlas School main dashboard';
  }getFooterCopy(true);
  
  export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
  }