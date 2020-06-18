import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('payments').insert([
    { name: 'Cartão de crédito' },
    { name: 'Cartão de débito' },
    { name: 'Dinheiro' },
  ]);
}
