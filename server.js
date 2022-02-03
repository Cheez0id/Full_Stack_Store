const express = require('express');
const sequelize = require('./config/connection');
const models = require('./models');
//const category = require('./models/Product');
const app = express();
const PORT = process.env.PORT || 3001;


// var commerce_db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: process.env.DB_MARY,
//   password: process.env.DB_PW,
//   database: process.env.DB_SRC,
// });

// commerce_db.connect((err) => {
//   if (err){
//     throw err;
//   }
//   console.log('mysql is connected!')
// })


//username/passwords hidden via sequelize using .env 
sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


