import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class GenreController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const genres = await knex('genres').select('*');

      return response.json(genres);
    } catch (error) {
      next(error);
    }
  }
}

export default new GenreController();
