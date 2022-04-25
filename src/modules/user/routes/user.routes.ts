import { Router, Request, Response } from 'express';
import { userSchemaValidator } from '../validators/UserSchemaValidator';
import UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/', (request: Request, response: Response) => {
  response.json({ ok: 'User Routes' });
});

userRoutes.post('/', userSchemaValidator, UserController.execute);

export default userRoutes;
