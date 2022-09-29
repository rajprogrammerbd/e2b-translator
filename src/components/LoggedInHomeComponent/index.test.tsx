import { render, screen } from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoggedInHomeComponent from './';
import thunk from 'redux-thunk';

const initialState = {
    login: {
        isLogin: true,
        displayedAnimation: true,
    user: {
      success: true,
      name: 'Raj Dutta',
      email: 'rd2249619@gmail.com',
      accessType: 'Admin'
    }
  },
  loginApi: {}
};

const middleware = [thunk];
const mockStore = configureStore(middleware);
let store = mockStore(initialState);

describe('LoggedInHomeComponent', () => {
    it('render the LoggedInHomeComponent', () => {
        render(
            <Provider store={store}>
                <LoggedInHomeComponent />
            </Provider>
        );
        
        expect(screen.getByText('Hello World!')).not.toBeEmptyDOMElement();
    });
});

