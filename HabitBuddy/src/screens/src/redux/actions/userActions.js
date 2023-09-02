// src/redux/actions/userActions.js
export const login = (user) => {
    return {
      type: 'LOGIN',
      payload: user,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  
  // Create more actions for managing user data (habits, goals, etc.)
  