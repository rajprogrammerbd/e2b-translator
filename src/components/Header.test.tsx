import { fireEvent, render, screen } from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from './Header';
import thunk from 'redux-thunk';

const initialState = { login: { isLogin: true, user: {} }, loginApi: {} };
const middleware = [thunk];
const mockStore = configureStore(middleware);
let store = mockStore(initialState);

vi.mock('react-router-dom', () => ({
    Link: vi.fn(),
}));

describe('Header', () => {

    it('click to the logout button', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
    
        const button = screen.getByTestId('logout-button');

        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    });
});

