import React from 'react';
import { render, act, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoginPage from './Loginpage';

const initialState = { login: { isLogin: false } };
const mockStore = configureStore();
let store = mockStore(initialState);

jest.mock('react-router-dom', () => ({
    Link: jest.fn()
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
    });
});
