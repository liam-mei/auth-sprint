const knex = require("knex");
const secrets = require("../secrets");
const knexConfig = require("../knexfile.js");

module.exports = knex(knexConfig[secrets.environment]);
