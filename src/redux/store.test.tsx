import { vi, test, expect } from "vitest";
import { persistConfig } from './store';

test('persistConfig', () => {
    const value = Object.keys(persistConfig);
    
    expect(value).toContain('key');
    expect(value).toContain('storage');
});
