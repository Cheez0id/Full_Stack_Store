const router = require('express').Router();
 
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
router.post('/', (req, res) => {
  const { username, phone, address, paymentMethod } = req.body;
  const { authorization } = req.headers;
  res.send({
    username,
    phone,
    address,
    paymentMethod,
    authorization
  });
});

module.exports=router