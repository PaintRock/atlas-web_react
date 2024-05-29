import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useState } from 'react';

const styles = StyleSheet.create({
  formRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1rem',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '1rem',
    '@media (max-width: 900px)': {
      marginBottom: '0.5rem',
      width: '100%',
    },
  },
  formLabel: {
    marginRight: '0.5rem',
    width: '70px',
    textAlign: 'right',
  },
  formInput: {
    flex: '1',
    border: 'none',
    marginLeft: '40px',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      marginTop: '1rem',
      width: 'auto',
    },
  },
});

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === 'valid@example.com' && password === 'correctpassword') {
      props.logIn(email, password);
    } else {
      alert('Invalid email or password');
    }
  };
  
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setEnableSubmit(email !== '' && e.target.value !== '');
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value !== '' && password !== '');
  };

  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.formRow)}>
          <div className={css(styles.formGroup)}>
            <label htmlFor="email" className={css(styles.formLabel)}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={css(styles.formInput)}
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className={css(styles.formGroup)}>
            <label htmlFor="password" className={css(styles.formLabel)}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={css(styles.formInput)}
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <input
            type='submit'
            className={css(styles.button)}
            disabled={!enableSubmit}
            value="OK"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
