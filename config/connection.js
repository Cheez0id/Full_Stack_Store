require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.FULLSTACK_DB_URL
  ? new Sequelize(process.env.FULLSTACK_DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    const mysql = require('mysql2');
    var fullstack_db = mysql.createConnection({
      host: "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

module.exports = sequelize;
