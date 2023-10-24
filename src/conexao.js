const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'isabelle.db.elephantsql.com',
        port: 5432,
        user: 'lanhryxf',
        password: 'K0v0ZpS4rd2ZylLilehKv41EYAWG9n6u',
        database: 'lanhryxf',
        ssl: { rejectUnauthorized: false }
    }
});

module.exports = knex;