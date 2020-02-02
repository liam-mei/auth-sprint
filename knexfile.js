// This was the Guided Project's way of being DRY
const migrationsAndSeeds = {
  migrations: {
    directory: "./database/migrations"
  },
  seeds: {
    directory: "./database/seeds"
  }
};

module.exports = {
  development: {
    ...migrationsAndSeeds,
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/db_development.db3"
    }
  },
  test: {
    ...migrationsAndSeeds,
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/db_test.db3"
    }
  },
  production: {
    ...migrationsAndSeeds,
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
