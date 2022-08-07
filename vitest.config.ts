import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ["@testing-library/jest-dom/extend-expect", "./setupTests.ts"],
        coverage: {
            reporter: ['text', 'json', 'lcov']
        }
    },
    plugins: [react()]
});