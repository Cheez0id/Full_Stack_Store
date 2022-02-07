const { Cart } = require("../models");

const cartData = [
  {
    user_name: "Fake",
    user_id: 1,
    address: "23 Bee",
    phone: 4042252255,
    payment_method:25,
   
  },
  {
  product_name: 'Trizzy Chocolate Chip',
    description:'Mouth watering Chocolate chip',
    price: 2.99,
    stock: 24,
    product_id: 1,
  },
  {
    product_name: 'Cheezy Oatmeal Crunch',
    description:'Thick, crunchy, Oatmeal Raisin',
    price: 2.99,
    stock: 24,
    product_id: 5,
  },
  {
    product_name: 'Sleepy King Doodle',
    description:'Snickerdoodle',
    price: 2.99,
    stock: 24,
    product_id: 4,
  },
  {
    product_name: 'Sweet Tooth',
    description:'Macadamia Nut',
    price: 2.99,
    stock: 24,
    product_id: 3,
  },
  {
    product_name: 'Blippi Baby',
    description:'Peanut Butter',
    price: 2.99,
    stock: 24,
    product_id: 2,
  },
];
const seedCart = () => Cart.bulkCreate(cartData);

module.exports = seedCart;