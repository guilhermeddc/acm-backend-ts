import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('answers').insert([
    { name: 'Casais' },
    { name: 'Homens' },
    { name: 'Mulheres' },
  ]);
}
