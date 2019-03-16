const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/ear_worm');

module.exports = { db };
