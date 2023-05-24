require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
require("./db/conn");
const Products = require("./models/productSchema");
const DefaltData = require("./defaultData");
const cors = require("cors");
const router = require("./routes/router");
const bodyParser = require("body-parser");
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/pay",async (req,res)=>{
  console.log(req.body.token);
  await Stripe.charges.create({
    source:req.body.token.id,
    amount:req.body.amount,
    currency:"usd",
  })
})
app.use(express.json());
app.use(cors());
app.use(router);
console.log("hello")
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});

DefaltData();
