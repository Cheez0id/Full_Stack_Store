const router = require('express').Router();

const homePage= () =>{
router.get('/', async(req, res) => {
  console.log('hello');
  res.render('all');
})}

module.exports=homePage()