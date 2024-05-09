import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import './Footer.css';


function Footer() {
  return (
    <div className="App-footer">
      <p>{getFooterCopy(true)} - {getFullYear()}</p>
    </div>
  );
}
export default Footer;
// Path: task_0/dashboard/src/Footer/Footer.test.js