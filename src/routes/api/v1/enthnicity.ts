import { Router } from 'express';

import EthnicityController from '../../../app/controllers/EthnicityController';

const routes = Router();

routes.get('/', EthnicityController.index);

export default routes;
