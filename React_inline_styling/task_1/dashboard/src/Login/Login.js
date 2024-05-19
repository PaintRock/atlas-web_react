import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '1rem',
  },
  formLabel: {
    marginRight: '0.5rem',
  },
});

function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form>
        <div className={css(styles.formRow)}>
          <div className={css(styles.formGroup)}>
            <label htmlFor="email" className={css(styles.formLabel)}>
              Email:
            </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={css(styles.formGroup)}>
            <label htmlFor="password" className={css(styles.formLabel)}>
              Password:
            </label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button">OK</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
