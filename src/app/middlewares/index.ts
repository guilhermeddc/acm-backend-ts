import { Request, Response, NextFunction } from 'express';

export const catchErrors = (
  error: any,
  request: Request,
  response: Response,
) => {
  response.status(error.status || 500);
  response.json({ error: error.message });
};
