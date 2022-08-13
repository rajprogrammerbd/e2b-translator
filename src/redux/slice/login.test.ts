import {describe, expect, it} from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './login';

describe('loginSlice', () => {
    const store = configureStore({
        reducer: {
            login: loginSlice.reducer
        }
    });

    it('fire the loginSuccess action', () => {
        store.dispatch(loginSlice.actions.loginSuccess({}));
        
        expect(store.getState().login).toBeTruthy();
    });

    it('fire the loginFailed action', () => {
        store.dispatch(loginSlice.actions.loginFailed());

        expect(store.getState().login.isLogin).toBeFalsy();
    });

    it('fire the resetLogin action', () => {
        store.dispatch(loginSlice.actions.resetLogin({}));

        expect(store.getState().login.isLogin).toBeFalsy();
    });
});
