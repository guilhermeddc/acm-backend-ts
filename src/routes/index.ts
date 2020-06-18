import { Router } from 'express';
import routesApi from './api/v1';

const routes = Router();

routes.use('/v1/api', routesApi);
routes.get('/', (req, res) => res.json({ message: 'Api running!' }));

export default routes;
