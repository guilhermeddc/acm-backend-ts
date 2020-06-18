import { Router } from 'express';

import GenreController from '../../../app/controllers/GenreController';

const routes = Router();

routes.get('/', GenreController.index);

export default routes;
