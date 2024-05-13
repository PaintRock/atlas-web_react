import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import Notifications from './Notifications/Notifications.js';
import './App/App.css';
import './Notifications/Notifications.css';

const h1 = document.createElement('h1');
h1.innerHTML = "Maybe today is ";
document.body.appendChild(h1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);