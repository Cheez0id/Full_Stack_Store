const express = require('express');
const sequelize = require('./config/connection');
const models = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');

//setting default root folder to 'public'
app.use(express.static('public'));

//username/passwords hidden via sequelize using .env and the local host(your PC) which is where the database will be generated 
var fullstack_db = mysql.createConnection({
  host: "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//Connecting to the fullstack_db database
fullstack_db.connect((err) => {
  if (err){
    throw err;
  }
  console.log('mysql is connected!')
})


//connect to port 3001 or first available 
sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


