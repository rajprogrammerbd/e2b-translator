import { vi, test, expect } from "vitest";
import rootReducer, { persistConfig } from './store';
import { RESET } from "./actions/resetReduxStore";

test('persistConfig', () => {
    const value = Object.keys(persistConfig);
    
    expect(value).toContain('key');
    expect(value).toContain('storage');
});

test('rootReducer', () => {
    const value: any = rootReducer({}, { type: RESET });
    const keys = Object.keys(value);

    expect(keys).toContain('loginApi');
    expect(keys).toContain('login');
});