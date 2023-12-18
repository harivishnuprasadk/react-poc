// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated=true;
      localStorage.setItem('loggedIn',true);
    },
    logout: (state) => {
      state.isAuthenticated=false;
      localStorage.removeItem('loggedIn');    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;