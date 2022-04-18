import { Router, Request, Response } from 'express';
import { userSchemaValidator } from '../validators/UserSchemaValidator';
import CreateUserController from '../controllers/CreateUserController';

const userRoutes = Router();

userRoutes.get('/', (request: Request, response: Response) => {
  response.json({ ok: 'User Routes' });
});

userRoutes.post('/', userSchemaValidator, CreateUserController.execute);

export default userRoutes;
