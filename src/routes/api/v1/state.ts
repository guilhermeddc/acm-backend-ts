import { Router } from 'express';

import StateController from '../../../app/controllers/StateController';

const routes = Router();

routes.get('/', StateController.index);
routes.post('/', StateController.store);

export default routes;
