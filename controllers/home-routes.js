const router = require("express").Router();

const { Product, User, Cart } = require("../models");

router.get("/", async (req, res) => {

  try {
    const productData = await Product.findAll(
      {
        include: [{model: User}]
      }
    );

    const products = productData.map(prod => prod.get({plain: true}));
    console.log(products);
    res.render('productPage', {products});
  } catch (err) {
    res.status(500).json(err);
  }
  
  // // find all products
    // try {
    // const productData = await Product.findAll({
    //   include: [{ model: User }, { model: Product }],
    // });

    // const products=productData.map((product) => product.get({plain:true}))
//res.render('productPage')

  //   res.status(200).json(productData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports=router