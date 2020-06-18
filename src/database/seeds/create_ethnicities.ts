import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('ethnicities').insert([
    { name: 'Branco' },
    { name: 'Mestiço' },
    { name: 'Mulato' },
    { name: 'Negro' },
    { name: 'Oriental' },
    { name: 'Pardo' },
  ]);
}
