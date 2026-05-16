const path = require("path");
require("dotenv").config();

const connection = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      ssl: {
        rejectUnauthorized: false,
      },
    };

module.exports = {
  development: {
    client: "pg",
    connection,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
  },
  production: {
    client: "pg",
    connection,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
  },
};
