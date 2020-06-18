import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';
import { Transaction } from 'knex';

class UserController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const users = await knex('users').select('*');

      return response.json(users);
    } catch (error) {
      next(error);
    }
  }

  async store(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        email,
        password_hash,
        age,
        cash,
        featured,
        super_featured,
        slug,
        name,
        surname,
        phone,
        description,
        ethnicity,
        genre,
        city,
      } = request.query;

      const trx = await knex.transaction();

      const user = await knex('users').select('*');

      return response.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
