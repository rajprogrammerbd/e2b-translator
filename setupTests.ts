import "whatwg-fetch";
import '@testing-library/jest-dom/extend-expect';
import server from './src/mocks/server';

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers();
});