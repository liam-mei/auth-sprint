module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./database/auth.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  },
  test: {
    client: "sqlite3",
    connection: { filename: "./database/test.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  }
};

// This was the Guided Project's way of being DRY
// const sqlite = {
//   client: "sqlite3",
//   useNullAsDefault: true,
//   migrations: {
//     directory: "./data/migrations",
//   },
//   seeds: {
//     directory: "./data/seeds",
//   },
// }

// module.exports = {
//   dev: {
//     ...sqlite,
//     connection: {
//       filename: "./data/dev.db3",
//     },
//   },
//   test: {
//     ...sqlite,
//     connection: {
//       filename: "./data/test.db3",
//     },
//   },
// }
