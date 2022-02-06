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

const sequelize = new Sequelize('fullstack_db', 'root', 'code', {
  host: 'localhost',
  dialect: 'mysql'})

//an attempt at testing the connection to the db
// const testConnect = () =>{      
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }}

// testConnect();

//A different attempt at testing the connection to the db
sequelize.authenticate().then(function(errors) { console.log(errors) });


module.exports = sequelize;
