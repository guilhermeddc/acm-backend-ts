import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class EthnicityController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const ethnicities = await knex('ethnicities').select('*');

      return response.json(ethnicities);
    } catch (error) {
      next(error);
    }
  }
}

export default new EthnicityController();
