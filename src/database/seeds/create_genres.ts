import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('genres').insert([
    { name: 'Homen' },
    { name: 'Mulher' },
    { name: 'Transex' },
  ]);
}
