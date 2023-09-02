// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Create this file (see step 4)
import thunk from 'redux-thunk'; // If you plan to use Redux Thunk for async actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
