exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
};
