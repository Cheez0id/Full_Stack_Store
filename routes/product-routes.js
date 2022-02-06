// const router = require("express").Router();
// const { Product, User, Cart } = require("../../models");

// router.get("/", async (req, res) => {
//   // find all products
//     try {
//     const productData = await Product.findAll({
//       include: [{ model: User }, { model: Cart }],
//     });

//     res.status(200).json(productData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.put("/:id", (req, res) => {
//                     // update product data
//                     Product.update(req.body, {
//                       where: {
//                         id: req.params.id,
//                       },
//                     })
//                       .then((product) => {
//                         // find all associated tags from ProductTag
//                         return Product.findAll({ where: { product_id: req.params.id } });
//                       })
//                       .then((product) => {
//                         // get list of current product_ids
//                         const productIds = product.map(({ product_id }) => product_id);
//                         // create filtered list of new tag_ids
//                         const newProduct = req.body.productIds
//                           .filter((product_id) => !productIds.includes(product_id))
//                           .map((product_id) => {
//                             return {
//                               product_id: req.params.id,
//                               user_id,
//                             };
//                           });
