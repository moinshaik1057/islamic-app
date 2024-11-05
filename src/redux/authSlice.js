// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   isAuthenticated: false,
//   token: null,
//   user: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     authStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     authSuccess: (state, action) => {
//       state.isAuthenticated = true;
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//       state.loading = false;
//       console.log("Auth Success: ", state); // Add this line to check the state
//     },
//     authFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.token = null;
//       state.user = null;
//     },
//   },
// });

// export const { authStart, authSuccess, authFailure, logout } = authSlice.actions;

// export const login = (email, password) => async (dispatch) => {
//   dispatch(authStart());
//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//     const { token, user } = res.data;
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user)); // Store user info
//     dispatch(authSuccess({ token, user }));
//   } catch (err) {
//     const errorMsg = err.response?.data?.msg || "An error occurred during login.";
//     dispatch(authFailure(errorMsg));
//   }
// };

// export const register = (username, email, password) => async (dispatch) => {
//   dispatch(authStart());
//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
//     const { token, user } = res.data;
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user)); // Store user info
//     dispatch(authSuccess({ token, user }));
//   } catch (err) {
//     console.log(err);
//     const errorMsg = err.response?.data?.message || "An error occurred during registration.";
//     dispatch(authFailure(errorMsg));
//   }
// };

// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem('token');
//   dispatch(logout());
// };

// export const selectAuth = (state) => state.auth;

// export default authSlice.reducer;

//==========================================================================================

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Load token and user from localStorage
const token = localStorage.getItem('token');
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
  isAuthenticated: !!token, // Set to true if token exists
  token: token || null,
  user: user || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loading = false;
      console.log("Auth Success: ", state);
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { authStart, authSuccess, authFailure, logout } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(authSuccess({ token, user }));
  } catch (err) {
    const errorMsg = err.response?.data?.msg || "An error occurred during login.";
    dispatch(authFailure(errorMsg));
  }
};

export const register = (username, email, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(authSuccess({ token, user }));
  } catch (err) {
    const errorMsg = err.response?.data?.message || "An error occurred during registration.";
    dispatch(authFailure(errorMsg));
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch(logout());
};

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
