import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRoutes = Router();

profileRoutes.get('/me', ensureAuthenticated, ProfileController.execute);

export default profileRoutes;
