import { Request, Response, NextFunction } from 'express';
import knex from '../../database/connection';

class PaymentController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const payments = await knex('payments').select('*');

      return response.json(payments);
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentController();
