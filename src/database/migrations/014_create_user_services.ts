import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('user_services', (table) => {
    table.increments('id').primary();
    table.integer('user').notNullable().references('id').inTable('users');
    table.integer('service').notNullable().references('id').inTable('services');
  });
}
export async function down(Knex: Knex) {
  return Knex.schema.dropTable('user_services');
}
