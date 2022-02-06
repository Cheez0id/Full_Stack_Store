const { Product } = require("../models");

const productData = [
  {
    product_name: "Trizzy Chocolate Chip",
    description: "Mouth watering Chocolate chip",
    price: 2.99,
    stock: 24,
    product_id: 1,
  },
  {
    product_name: "Cheezy Oatmeal Crunch",
    description: "Thick, crunchy, Oatmeal Raisin",
    price: 2.99,
    stock: 24,
    product_id: 5,
  },
  {
    product_name: "Sleepy King Doodle",
    description: "Snickerdoodle",
    price: 2.99,
    stock: 24,
    product_id: 4,
  },
  {
    product_name: "Sweet Tooth",
    description: "Macadamia Nut",
    price: 2.99,
    stock: 24,
    product_id: 3,
  },
  {
    product_name: "Blippi Baby",
    description: "Peanut Butter",
    price: 2.99,
    stock: 24,
    product_id: 2,
  },
  {
    product_name: "Milk",
    description: "Vitamin D Whole Milk",
    price: 3.99,
    stock: 24,
    product_id: 6,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
