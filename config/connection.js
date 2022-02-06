require('dotenv').config();

const Sequelize = require('sequelize');

// const sequelize = process.env.FULLSTACKDB_URL
//   ? new Sequelize(process.env.FULSTACKDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})


//A different attempt at testing the connection to the db
sequelize.authenticate().then(function(errors) { console.log(errors) });


    // const mysql = require('mysql2');
    // var fullstack_db = mysql.createConnection({
    //   host: "127.0.0.1",
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    // });

module.exports = sequelize;
// module.exports = mysql;
