import { Router } from 'express';

import adRoutes from '../../modules/ad/routes/ad.routes';
import categoryRoutes from '../../modules/category/routes/category.routes';
import stateRoutes from '../../modules/state/routes/state.routes';
import userRoutes from '../../modules/user/routes/user.routes';

const routes = Router();

routes.use('/ad', adRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/states', stateRoutes);
routes.use('/user', userRoutes);

export default routes;
