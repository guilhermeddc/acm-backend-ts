import knex from 'knex';

const connection = knex({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '29gu09il',
    database: 'acm',
  },
  useNullAsDefault: true,
});

export default connection;
