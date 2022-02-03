// // import models
// const Product = require('./Product');
// const User = require('./User');
// const Cart = require('./Cart');


// // Products belongsTo Category

// Product.belongsTo(User,{
//   foreignKey: 'user_id',
// });
// // Categories have many Products

// User.hasMany( Product,{
//   foreignKey: 'category_id',
// });
// // Products belongToMany Tags (through ProductTag)

// Product.belongsToMany(Cart, {
//   through: ag,
//   foreignKey: 'product_id'
// });
// // Tags belongToMany Products (through ProductTag)

// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: 'tag_id',
// });

// module.exports = {
//   Product,
//   Category,
//   Tag,
//   ProductTag,
// };
