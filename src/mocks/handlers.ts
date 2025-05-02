import { rest } from 'msw';
import type { ContactForm } from '../types';
export const handlers = [rest.post('/api/contact', async (req, res, ctx) => {
  const data = (await req.json()) as ContactForm;
  if (!data.name || !data.email || !data.message) {
    return res(ctx.status(400), ctx.json({
      error: 'Required fields are missing'
    }));
  }
  return res(ctx.status(200), ctx.json({
    message: 'Form submitted successfully'
  }));
})];