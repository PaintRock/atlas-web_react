import React from 'react';
import logo from '../assets/mascot-blue.png';
// import './Header.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
 header {
  text-align: left;
}

appheader {
  background-color: white;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-size: calc(3px + 2vmin);
  color: lightcoral;
  margin-bottom: 10px;
  border-bottom: 4px solid lightblue;
  padding-bottom: 10px;
}

appheader img { 
  height: 100px;
  mix-blend-mode: multiply;
}

app-logo {
  height: 20vmin;
  pointer-events: none;
  margin-right: 20px;
'@media (prefers-reduced-motion: no-preference)': {
    animation: App-logo-spin infinite 20s linear,
  },
}

'@keyframes App-logo-spin': {
  '0%': {
    transform: 'rotate(0deg)',
  },
  '20%': {
    transform: 'rotate(120deg)',
  },
  '40%': {
    transform: 'rotate(-45deg)',
  },
  '60%': {
    transform: 'rotate(120deg)',
  },
  '80%': {
    transform: 'rotate(360deg)',
  },
  '100%': {
    transform: 'rotate(0deg)',
  },
},
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <img src={logo} className={css(styles.appHeaderImg)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
  // {/* <a
  //    className="App-link"
  //    href="https://reactjs.org"
  //    target="_blank"
  //    rel="noopener noreferrer"
  //  >
  //    Learn React
  //  </a> */}