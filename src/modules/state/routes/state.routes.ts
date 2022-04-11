import { Router } from 'express';
import StateController from '../controllers/StateController';
import ensureAuthenticated from '../../user/middlewares/ensureAuthenticated';

const stateRoutes = Router();
const stateController = new StateController();

stateRoutes.get('/', ensureAuthenticated, stateController.List);

export default stateRoutes;
