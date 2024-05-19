import React from 'react';
import logo from '../assets/mascot-blue.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    textAlign: 'left',
  },
  appHeader: {
    backgroundColor: 'white',
    minHeight: '20vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: 'calc(3px + 2vmin)',
    color: 'lightcoral',
    marginBottom: '10px',
    borderBottom: '4px solid lightblue',
    paddingBottom: '10px',
  },
  appHeaderImg: {
    height: '100px',
    mixBlendMode: 'multiply',
  },
  appLogo: {
    height: '20vmin',
    pointerEvents: 'none',
    marginRight: '20px',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: 'App-logo-spin infinite 20s linear',
    },
  },
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