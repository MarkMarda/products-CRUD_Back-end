require("dotenv").config();

const config = {
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "K@kf@_",
    host: process.env.DB_HOST || "localhost",
    dbName: process.env.DB_NAME
  }
};

module.exports = config;