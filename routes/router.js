const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");

router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    console.log("aaaa" + productsdata);
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
    res.status(201).json(productsdata);
  }
});

//get individual products
router.get("/getproduct/:id/", async (req, res) => {
  try {
    const { id } = req.params;
    const singleproductsdata = await Products.findOne({ id: id });
    console.log("bbbb" + singleproductsdata);
    res.status(201).json(singleproductsdata)
  } catch (error) {
    console.log("error" + error.message);
    res.status(400).json(singleproductsdata)
  }
});

module.exports = router;
