import { Router } from 'express';

import PlaceController from '../../../app/controllers/PlaceController';

const routes = Router();

routes.get('/', PlaceController.index);

export default routes;
