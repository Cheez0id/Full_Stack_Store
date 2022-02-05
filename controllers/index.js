const router = require('express').Router();

// const { User, Product, Cart } = require('../models');
const path = require('path');

//The difference between 2&3 above allows a destructure of the models folder so that if i call to a table later in this file I can just say 'tablename' instead of 'models.tablename'
// i will have to require the routes files that I create here in index.js 
//i will have to export those routes in those route files

//the below res.render all - the reason we can use it is because we downloaded the express.handlebars library

// router.get('/', async(req, res) => {
//   console.log('hello');
//   res.render('all');
// })

router.get('/products', async(req, res) => {
  console.log('hello');
  res.render('productPage');
})

// primary Trying to make routes modularized; the below function should live in 'primaryRoutes' but im not exactly how to export and call the function
const homePage= () =>{
  router.get('/', async(req, res) => {
    console.log('hello');
    res.render('all');
  })}
  homePage();

// BELOW IS ME LEARNING/STUDYING

//very simple get request.
// respond with "hello world" when a GET request is made to the homepage
router.get('/test', function (req, res, next) {
  res.send('hello world')
  console.log("testing this out")
  next()
  console.log("what does next do?")
})

// POST method route
// app.post('/test', function (req, res) {
//   res.send('POST request to the homepage')
// })

module.exports = router;



//IGNORE BELOW


// router.get('/', async (req, res) => {
// 	try {
// 		const userData = await User.findAll();
// 		console.log(userData);
// 		const serializedUser = userData.map((user) => user.get({ plain: true }));
// 		console.log(serializedUser);
// 		// res.status(200).json(userData);
// 		res.render('ayaya', { serializedUser });
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });
