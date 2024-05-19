import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import { StyleSheet, css } from 'aphrodite';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
// import './App/App.css';
// import './Header/Header.css';
// import './Footer/Footer.css';


const h1 = document.createElement('h1');
h1.innerHTML = "Maybe today is THAT DAY!!!";
document.body.appendChild(h1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);