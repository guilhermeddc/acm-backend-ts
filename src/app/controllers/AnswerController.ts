import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class AnswerController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const answers = await knex('answers').select('*');

      return response.json(answers);
    } catch (error) {
      next(error);
    }
  }
}

export default new AnswerController();
