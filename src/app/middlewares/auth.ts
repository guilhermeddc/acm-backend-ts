import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { Request, Response, NextFunction } from 'express';

import authConfig from '../../config/auth';

export default async (
  requenst: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = requenst.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token no provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    requenst.userId = decoded.id;

    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Token invalid' });
  }
};
