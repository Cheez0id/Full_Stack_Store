const router = require('express').Router();
const { User, Product } = require('../models');

router.get('/', async (req, res) => {
	try {
		const userData = await User.findAll();
		console.log(userData);
		const serializedUser = userData.map((user) => user.get({ plain: true }));
		console.log(serializedUser);
		// res.status(200).json(userData);
		res.render('ayaya', { serializedUser });
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
