import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('user_payments', (table) => {
    table.increments('id').primary();
    table.integer('user').notNullable().references('id').inTable('users');
    table.integer('payment').notNullable().references('id').inTable('payments');
  });
}
export async function down(Knex: Knex) {
  return Knex.schema.dropTable('user_payments');
}
