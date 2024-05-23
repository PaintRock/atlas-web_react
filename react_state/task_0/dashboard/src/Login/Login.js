import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setEnableSubmit(event.target.value !== "" && password !== "");
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setEnableSubmit(email !== "" && event.target.value !== "");
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(email, password);
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
              value={email}
              onChange={handleChangeEmail}
              className={css(styles.formInput)}
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
              onChange={handleChangePassword}
              className={css(styles.formInput)}
              
            />
          </div>
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={css(styles.button)}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
