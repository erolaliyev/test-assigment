import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockData from './mockData';

const server = setupServer(
  rest.get('http://localhost:8080/data.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: `You must add request handler` })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
