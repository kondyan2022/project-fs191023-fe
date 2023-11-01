import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLogin: false,
  isProfile: false,
};

export const tokenReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.isProfile = action.payload.isProfile;
      state.isLogin = true;
    },
    logOut: (state) => {
      state.token = null;
      state.isProfile = false;
      state.isLogin = false;
    },
  },
});

export const { setToken, logOut } = tokenReducer.actions;
