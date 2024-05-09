// Task 1: Create a new file named utils.js in the src directory. In this file, create the following functions:

export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }getFooterCopy(true);
  