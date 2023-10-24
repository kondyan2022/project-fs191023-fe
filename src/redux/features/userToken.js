import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLogin: false,
};

export const tokenReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    },
    logOut: (state, action) => {
      state.token = null;
      state.isLogin = false;
    },
  },
});

export const { setToken, logOut } = tokenReducer.actions;
