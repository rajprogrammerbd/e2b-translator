import { createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state: any) => {
      state.isLogin = true;
    },
    loginFailed: (state: any) => {
      state.isLogin = false;
    },
  },
})

export const { loginSuccess, loginFailed } = loginSlice.actions;

export default loginSlice.reducer;
