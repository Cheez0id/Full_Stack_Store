// const sequelize = require("../config/connection");


// import models
const Product = require('./Product');
const User = require('./User');
const Cart = require('./Cart');


// Products belongsTo User

Product.belongsTo(User,{
  foreignKey: 'user_id',
});
// User have many Products

// User.hasMany( Product,{
//   foreignKey: 'cart_id',
// });
// Products belongToMany Users (through ProductTag)

// Product.belongsToMany(Cart, {
//   through: User,
//   foreignKey: 'product_id'
// });
// Tags belongToMany Products (through ProductTag)

// Cart.belongsToMany(Product, {
//   through: User,
//   foreignKey: 'cart_id',
// });

module.exports = {
  Product,
  User,
  Cart,
 };
