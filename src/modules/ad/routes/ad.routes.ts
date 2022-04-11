import { Router, Request, Response } from 'express';

const adRoutes = Router();

adRoutes.get('/', (request: Request, response: Response) => {
  response.json({ ok: 'Ad Routes' });
});

export default adRoutes;
