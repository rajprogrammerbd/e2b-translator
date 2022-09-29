import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const handlers = [
  rest.post(`${import.meta.env.VITE_BACKEND_API_VARIABLE}auth/logout`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'ok' }),
    )
  }),
  rest.post(`${import.meta.env.VITE_BACKEND_API_VARIABLE}/auth/logout`, (req, res, ctx) => {
    return res(
      ctx.cookie('LOGIN_ACCESS_COOKIE', 'InvalidCookieSend', { maxAge: 360000, secure: true, sameSite: 'none' }),
      ctx.json({})
    );
  }),
  rest.post(`${import.meta.env.VITE_BACKEND_API_VARIABLE}/auth/login`, (req, res, ctx) => {
    const name = faker.name.findName();
    const email = faker.internet.email();
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        success: true,
        name,
        email,
      })
    )
  }),
];