import React from 'react';
import {describe, expect, it, vi} from 'vitest';
import { render, act, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { loginApi } from '../redux/services/loginApi';
import thunk from 'redux-thunk';
import LoginPage from './Loginpage';

const initialState = { login: { isLogin: false, user: {} }, loginApi: {} };
const middlewares = [thunk, loginApi.middleware];
const mockStore = configureStore(middlewares);
let store = mockStore(initialState);

vi.mock('react-router-dom', () => ({
    Link: vi.fn()
}));

describe('Loginpage', () => {
    it('login form validation', async () => {
        render(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        );

        await act(() => {
            fireEvent.change(screen.getByRole('textbox', { name: /email:/i }), { target: { value: "demo" } });
        });

        expect(screen.getByText('Required valid email')).toBeInTheDocument();

        await act(() => {
            fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: "demo" } });
        });


        expect(screen.getByText('Email and password must be vaildate')).toBeInTheDocument();

        await act(() => {
            fireEvent.change(screen.getByRole('textbox', { name: /email:/i }), { target: { value: "demo@email.com" } });
        });

        await act(() => {
            fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: "demo@password" } });
        });

        const loggedInButton = screen.getByTestId('login-submitted');

        await act(() => {
            fireEvent.click(loggedInButton);
        });
    });
});
