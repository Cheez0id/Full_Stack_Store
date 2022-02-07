const router = require('express').Router();

const { Product, User, } = require("../../models");

router.get("/", async (req, res) => {
  // find all products
//     try {
//     const productData = await Product.findAll({
//       include: [{ model: User }, { model: Product }],
//     });

//     const products=productData.map((product) => product.get({plain:true}))
res.render('productPage', {products})

//     res.status(200).json(productData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
});


module.exports=router