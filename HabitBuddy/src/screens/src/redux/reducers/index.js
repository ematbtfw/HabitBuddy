// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './user.js'; // Create this file (see step 5)

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers for habits, goals, etc.
});

export default rootReducer;
