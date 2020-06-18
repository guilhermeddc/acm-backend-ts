import { Router, Request, Response } from 'express';

import enthnicity from './enthnicity';
import genre from './genre';
import service from './service';
import place from './place';
import payment from './payment';
import answer from './answer';
import state from './state';
import city from './city';
import user from './user';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({ message: 'api running' });
});

routes.use('/ethnicities', enthnicity);
routes.use('/genres', genre);
routes.use('/services', service);
routes.use('/places', place);
routes.use('/payments', payment);
routes.use('/answers', answer);
routes.use('/states', state);
routes.use('/cities', city);
routes.use('/users', user);

export default routes;
