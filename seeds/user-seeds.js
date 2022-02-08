const { User } = require("../models");

const userData = [
  {
    id: 1,
    email: "janeway@captain.com",
    address: "USS ENTERPRISE",
    password:"25",
    paymentMethod:"25",
  },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
