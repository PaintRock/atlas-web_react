// Task 0: Create a new React app
import React from 'react';
import logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
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
        </a> */}
      </header>
    
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="button">OK</button>
    </div> 
    <div className='App-footer'>
      <p>Copyright 2024 - Holberton School</p>
    </div>
    </div>
  );
}

export default App;
