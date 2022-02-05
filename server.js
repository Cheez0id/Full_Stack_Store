const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
// const mysql = require('mysql2');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;


//use handlbars engine! copied this from actitivity; the below format is paart of the handlebard documentation
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//setting default root folder to 'public'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// const routes = require('./controllers');
// app.use(routes);
//17 and 18 are the same as 20
app.use(require('./controllers'));

// //username/passwords hidden via sequelize using .env and the local host(your PC) which is where the database will be generated --NOTE THE BELOW IS NOT NEEDED MARY!
// var fullstack_db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

//Connecting to the fullstack_db database
// fullstack_db.connect((err) => {
//   if (err){
//     throw err;
//   }
//   console.log('mysql is connected!')
// })


//connect to port 3001 or first available 
sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});
