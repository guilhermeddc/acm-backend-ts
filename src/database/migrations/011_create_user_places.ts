import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('user_places', (table) => {
    table.increments('id').primary();
    table.integer('user').notNullable().references('id').inTable('users');
    table.integer('place').notNullable().references('id').inTable('places');
  });
}
export async function down(Knex: Knex) {
  return Knex.schema.dropTable('user_places');
}
