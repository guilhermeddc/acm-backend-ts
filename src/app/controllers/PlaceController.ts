import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class PlaceController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const places = await knex('places').select('*');

      return response.json(places);
    } catch (error) {
      next(error);
    }
  }
}

export default new PlaceController();
