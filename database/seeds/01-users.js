const bcrypt = require("bcryptjs");
const hash = async password => await bcrypt.hash(password, 12);

exports.seed = async function(knex) {
  await knex("users").truncate();
  await knex("users").insert([
    { id: 1, username: "user1", password: `${await hash("asdf")}` },
    { id: 2, username: "user2", password: `${await hash("asdf")}` },
    { id: 3, username: "user3", password: `${await hash("asdf")}` }
  ]);
};
