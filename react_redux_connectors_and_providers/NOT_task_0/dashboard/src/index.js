import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import { StyleSheet, css, keyframes } from 'aphrodite';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import { configureStoreStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

const h1 = document.createElement('h1');
h1.innerHTML = "Maybe today is THAT DAY!!!";
document.body.appendChild(h1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App /> 
    </Provider>
    </React.StrictMode>
);