import uiReducer from './uiReducer';

import { combineReducers } from 'redux';
// import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;