import { Router, Request, Response } from 'express';

const userRoutes = Router();

userRoutes.get('/', (request: Request, response: Response) => {
  response.json({ ok: 'User Routes' });
});

export default userRoutes;
