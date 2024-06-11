import React from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
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

const Login = ({ logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
    setIsLoggedIn(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value.trim() !== "" && password.trim() !== "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setEnableSubmit(email.trim() !== "" && e.target.value.trim() !== "");
  };

  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleSubmit}>
        <div className={css(styles.formRow)}>
          <div className={css(styles.formGroup)}>
            <label htmlFor="email" className={css(styles.formLabel)}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              style={{ border: 'none' }}
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
              value={password}
              onChange={handlePasswordChange}
              className={css(styles.formInput)}
              style={{ marginLeft: '40px' }}
            />
          </div>
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!enableSubmit}
          />
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;
