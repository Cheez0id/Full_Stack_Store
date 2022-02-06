const { User } = require("../models");

const userData = [
  {
    user_name: "Fake",
    user_id: 1,
    address: "23 Bee",
    phone: 4042252255,
    payment_method:25,
  },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
