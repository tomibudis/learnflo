import { setupServer } from 'msw/node';
import { http } from 'msw';

export const server = setupServer(
  // Example handler
  http.get('/api/example', (req, res, ctx) => {
    return res(ctx.json({ message: 'Hello from MSW' }));
  }),
);
