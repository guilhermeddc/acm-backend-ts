import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

import { catchErrors } from './app/middlewares';

const app = express();

app.use(cors());
app.use(express.json());

app.use(errors());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

export default app;
