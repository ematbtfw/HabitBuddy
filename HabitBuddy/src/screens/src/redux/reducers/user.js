// src/redux/reducers/user.js
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isAuthenticated: true, user: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      // Add more cases for managing user data (habits, goals, etc.)
      default:
        return state;
    }
  };
  
  export default userReducer;
  