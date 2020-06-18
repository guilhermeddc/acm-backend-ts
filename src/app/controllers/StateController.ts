import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class StateController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const states = await knex('states').select('*');

      return response.json(states);
    } catch (error) {
      next(error);
    }
  }

  async store(request: Request, response: Response, next: NextFunction) {
    const { name, uf } = request.body;

    try {
      await knex('states').insert({ name, uf });

      return response.status(200).json({ message: 'Success' });
    } catch (error) {
      next(error);
    }
  }
}

export default new StateController();
