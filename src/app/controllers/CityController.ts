import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class CityController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const cities = await knex('cities')
        .join('states', 'states.id', '=', 'cities.state')
        .select('cities.id', 'cities.name', 'cities.slug', 'states.uf');

      return response.json(cities);
    } catch (error) {
      next(error);
    }
  }

  async store(request: Request, response: Response, next: NextFunction) {
    const { slug, name, state } = request.body;

    try {
      await knex('cities').insert({ slug, name, state });

      return response.status(200).json({ message: 'Success' });
    } catch (error) {
      next(error);
    }
  }
}

export default new CityController();
