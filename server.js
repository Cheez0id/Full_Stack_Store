const express = require('express');
const sequelize = require('./config/connection');
const models = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');

var fullstack_db = mysql.createConnection({
  host: "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

fullstack_db.connect((err) => {
  if (err){
    throw err;
  }
  console.log('mysql is connected!')
})


//username/passwords hidden via sequelize using .env 
sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


