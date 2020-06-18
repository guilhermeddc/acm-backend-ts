import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cities', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('slug').notNullable();
    table.integer('state').references('id').inTable('states').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cities');
}
