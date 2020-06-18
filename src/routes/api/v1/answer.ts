import { Router } from 'express';

import AnswerController from '../../../app/controllers/AnswerController';

const routes = Router();

routes.get('/', AnswerController.index);

export default routes;
