import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('places').insert([
    { name: 'Aceita viajar' },
    { name: 'Domicílio' },
    { name: 'Hotéis / Motéis' },
    { name: 'Local próprio' },
  ]);
}
