import React from 'react';
import logo from '../assets/mascot-blue.png';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Holberton logo" />
      <h1>
        School dashboard
      </h1>
        {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
         >
        Learn React
        </a> */
        }
    </header>
);
}
export default Header;
