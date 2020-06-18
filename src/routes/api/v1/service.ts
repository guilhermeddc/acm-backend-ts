import { Router } from 'express';

import ServiceController from '../../../app/controllers/ServiceController';

const routes = Router();

routes.get('/', ServiceController.index);

export default routes;
