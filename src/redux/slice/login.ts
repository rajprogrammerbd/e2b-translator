import { createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  isLogin: boolean;
  user: {
    email?: string;
    name?: string;
    success?: boolean;
  };
}

const initialState = {
  isLogin: false,
  user: {},
} as LoginState;

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess(state: any, action: any) {
      state.isLogin = true;
      state.user = action.payload;
    },
    loginFailed(state: any) {
      state.isLogin = false;
      state.user = {};
    },
  },
})

export const { loginSuccess, loginFailed } = loginSlice.actions;

export default loginSlice.reducer;
