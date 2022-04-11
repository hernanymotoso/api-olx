import { Router, Request, Response } from 'express';

const categoryRoutes = Router();

categoryRoutes.get('/', (request: Request, response: Response) => {
  response.json({ ok: 'Category Routes' });
});

export default categoryRoutes;
