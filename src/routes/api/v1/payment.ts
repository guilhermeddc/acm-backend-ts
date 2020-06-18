import { Router } from 'express';

import PaymentController from '../../../app/controllers/PaymentController';

const routes = Router();

routes.get('/', PaymentController.index);

export default routes;
