import { Router } from 'express';

import CityController from '../../../app/controllers/CityController';

const routes = Router();

routes.get('/', CityController.index);
routes.post('/', CityController.store);

export default routes;
