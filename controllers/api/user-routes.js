const router = require('express').Router();
 
router.get('/api', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
router.post('/', (req, res) => {
  const { email, address, password, paymentMethod } = req.body;
  // const { paymentMethod } = req.headers;
  res.send({
    email,
    address,
    password,
    paymentMethod
  });
});

module.exports=router