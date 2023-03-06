const Products = require("./models/productSchema");
const productsdata = require("./constants/productdata");

const DefaltData = async () => {
  try {
    await Products.deleteMany({});
    const storeData = await Products.insertMany(productsdata);
    console.log(storeData);
  } catch (error) {
    console.log("error" + error.message);
  }
};

module.exports = DefaltData;
