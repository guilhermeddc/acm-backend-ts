import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table
      .string('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .unique();
    table.string('image').notNullable();
    table.integer('age').notNullable();
    table.decimal('cash', 8, 2).notNullable();
    table.boolean('active').defaultTo(true);
    table.boolean('featured').defaultTo(false);
    table.boolean('super_featured').defaultTo(false);
    table.string('slug').notNullable().unique();
    table.string('name').notNullable();
    table.string('phone').notNullable();
    table.text('description').notNullable();
    table
      .integer('ethnicity')
      .references('id')
      .inTable('ethnicities')
      .notNullable();
    table.integer('genre').references('id').inTable('genres').notNullable();
    table.integer('city').references('id').inTable('cities').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
