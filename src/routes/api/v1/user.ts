import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../../../config/multer';
import UserController from '../../../app/controllers/UserController';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/', UserController.index);
routes.post('/', upload.single, UserController.store);

export default routes;
