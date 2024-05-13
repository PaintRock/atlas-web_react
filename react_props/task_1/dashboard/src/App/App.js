import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notification from '../Notifications/Notifications.js';

function App() {
  return (
    <>
    <Notification />
    <div className="App">
      <Header />
      <div className="App-body">
      <Login />
      </div>
      <Footer />
      </div>
    </>
  );

      {/* <header className="App-header">
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
      {/* </header> */} 
    
    {/* <div className='App-body'>
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
    </div>  */}
    {/* <Footer /> */}
    {/* <div className="App-footer">
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </div> */}
    
  
}

export default App;
