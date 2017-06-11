const pgp = require('pg-promise')(),
      db = pgp(process.env.DATABASE_URL || 'postgres://ccheng@localhost:5432/watchtower');
module.exports = db;
