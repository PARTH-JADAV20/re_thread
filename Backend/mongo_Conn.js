const express = require("express");
const mongoose = require("mongoose");

//********************************** Connection with DB********************************* */
const uri = "mongodb://127.0.0.1:27017/rethread";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

//************************************ Defining Schema *********************************** */
const Schema = mongoose.Schema()
const ProductSchema = new Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  size:{
    type:String,
    required:true,
    trim:true,
  },
  color:{
    type:String,
    required:true,
    trim:true,
  },
  material:{
    type:String,
    required:true,
    trim:true
  },
  brand:{
    type:String,
    trim:true
  },
  price:{
    type:Number,
    required:true,
    trim:true
  }
});

//******************************** Collection Creation ******************************/
const products = mongoose.model("products", ProductSchema);
