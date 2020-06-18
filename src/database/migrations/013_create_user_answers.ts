import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('user_answers', (table) => {
    table.increments('id').primary();
    table.integer('user').notNullable().references('id').inTable('users');
    table.integer('answer').notNullable().references('id').inTable('answers');
  });
}
export async function down(Knex: Knex) {
  return Knex.schema.dropTable('user_answers');
}
