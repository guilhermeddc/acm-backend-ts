import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class ServiceController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const services = await knex('services').select('*');

      return response.json(services);
    } catch (error) {
      next(error);
    }
  }
}

export default new ServiceController();
