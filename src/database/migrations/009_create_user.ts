import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password_hash').notNullable();
    table.boolean('admin').defaultTo(false);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
