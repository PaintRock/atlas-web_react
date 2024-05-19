import React from 'react';
import logo from '../assets/mascot-blue.png';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  '@keyframes shake': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '10%': {
      transform: 'rotate(-20deg)',
    },
    '20%': {
      transform: 'rotate(20deg)',
    },
    '30%': {
      transform: 'rotate(-10deg)',
    },
    '40%': {
      transform: 'rotate(10deg)',
    },
    '50%': {
      transform: 'rotate(0deg)',
    },
    '60%': {
      transform: 'rotate(180deg)',
    },
    '70%': {
      transform: 'rotate(200deg)',
    },
    '80%': {
      transform: 'rotate(180deg)',
    },
    '90%': {
      transform: 'rotate(200deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  logo: {
    height: '100px',
    pointerEvents: 'none',
    marginRight: '20px',
    animationName: 'shake', // Reference the keyframes animation
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
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
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
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