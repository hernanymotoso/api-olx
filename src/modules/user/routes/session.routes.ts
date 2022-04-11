import { Router } from 'express';
import SessionController from '../controllers/SessionController';
import { sessionSchemaValidator } from '../validators/SessionSchemaValidator';

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post('/', sessionSchemaValidator, sessionController.execute);

export default sessionRoutes;
