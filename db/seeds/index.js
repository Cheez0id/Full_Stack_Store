const models = require("../models");


const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');
const seedCarts = require('./cart-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedCarts();
  console.log('\n----- CARTS SEEDED -----\n');

  
  process.exit(0);
};

seedAll();