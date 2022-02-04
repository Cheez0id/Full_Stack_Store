const router = require('express').Router();

const primaryRoutes = require('./primaryRoutes');

router.use('/', primaryRoutes);

module.exports = router;