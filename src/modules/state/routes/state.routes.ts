import { Router } from 'express';
import StateController from '../controllers/StateController';

const stateRoutes = Router();
const stateController = new StateController();

stateRoutes.get('/', stateController.List);

export default stateRoutes;
