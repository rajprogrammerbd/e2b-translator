import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const handlers = [
  rest.post('/api/auth/login', (req, res, ctx) => {
    const name = faker.name.findName();
    const email = faker.internet.email();

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        success: true,
        name,
        email
      })
    )
  }),
];