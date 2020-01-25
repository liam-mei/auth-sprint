exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "derrick1",
          password:
            "$2a$14$XnptjEnpVJdUf5wVoK/pDOZd29AlYjafTzgFxAkzmdn083EP4BOH6"
        }, //password is asdf
        {
          id: 2,
          username: "derrick2",
          password:
            "$2a$14$XnptjEnpVJdUf5wVoK/pDOZd29AlYjafTzgFxAkzmdn083EP4BOH6"
        },
        {
          id: 3,
          username: "derrick3",
          password:
            "$2a$14$XnptjEnpVJdUf5wVoK/pDOZd29AlYjafTzgFxAkzmdn083EP4BOH6"
        }
      ]);
    });
};
