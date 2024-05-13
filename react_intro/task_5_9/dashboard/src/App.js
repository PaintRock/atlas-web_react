import React from 'react';
import logo from './mascot-blue.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Atlas logo" />
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
    <div className="App-footer">
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
