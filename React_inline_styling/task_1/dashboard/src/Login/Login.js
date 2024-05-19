import React from "react";
// import "./Login.css";

function Login() { 
    return (
<div className='App-body'>
<p>Login to access the full dashboard</p>
<form>
    <div className="form-row">
      <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
    </div>
    <button type="button">OK</button>
    </div>
  </form>
</div> 
    );
}

export default Login;