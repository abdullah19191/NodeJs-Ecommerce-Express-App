require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
require("./db/conn");
const Products = require("./models/productSchema");
const DefaltData = require("./defaultData")

app.use(express.json());

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
}) 

DefaltData();