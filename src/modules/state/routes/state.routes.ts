import { Router, Request, Response } from 'express';

const stateRoutes = Router();

stateRoutes.get('/', (request: Request, response: Response) => {
  response.json({ ok: 'State Routes' });
});

export default stateRoutes;
