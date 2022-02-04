const router = require('express').Router();

router.get('/s', async(req, res) => {
  console.log('ayaya');
  res.send('it do be what it do be');
});

module.exports = router;