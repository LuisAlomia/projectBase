require("dotenv").config();

const config = {
  port: process.env.PORT,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    nameDB: process.env.DB_NAMEDB,
  },
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;
