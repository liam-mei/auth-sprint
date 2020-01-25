const knex = require("knex");
const secrets = require("../configs/secrets");
const knexConfig = require("../knexfile.js");

module.exports = knex(knexConfig[secrets.environment]);
