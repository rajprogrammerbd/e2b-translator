import { createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  isLogin: boolean;
  displayedAnimation: boolean;
  user: {
    email?: string;
    name?: string;
    success?: boolean;
  };
}

export const initialState = {
  isLogin: false,
  displayedAnimation: false,
  user: {},
} as LoginState;

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess(state: any, action: any) {
      state.isLogin = true;
      state.displayedAnimation = false;
      state.user = action.payload;
    },
    loginFailed(state: any) {
      state.isLogin = false;
      state.displayedAnimation = false;
      state.user = {};
    },

    resetLogin(state: any, action: any) {
      state.isLogin = false;
      state.user = {};
    },

    displayedAnimation(state: any, action: any) {
      if (state.isLogin === true) {
        state.displayedAnimation = true;
      }
    }
  },
})

export const { loginSuccess, loginFailed, resetLogin, displayedAnimation } = loginSlice.actions;

export default loginSlice.reducer;
