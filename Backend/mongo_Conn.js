const express = require("express");
const mongoose = require("mongoose");

//********************************** Connection with DB********************************* */
const uri = "mongodb://127.0.0.1:27017/rethread";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

//************************************ Defining Schema *********************************** */

//********************* Product Schema *****************/
const Schema1 = mongoose.Schema()
const ProductSchema = new Schema1({
  product_name:{
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

//********************* User Deatils Schema *****************/
const Schema2 = mongoose.Schema()
const UserSchema = new Schema2({
  user_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  email:{
    type:String,
    unique:true,
    required:true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  contact:{
    type:Number,
    required:true,
    trim:true,
    minlength:10
  },
  address:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  earning:{
    type:Number,
    default:0,
  },
  cart:{
    type:[String],
    default:[]
  }
})

//************************ Resell Request Schema **********************/
const Schema3 = mongoose.Schema()
const ResellSchema = new Schema3({
  user_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  product_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  description:{
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
  primary_color:{
    type:String,
    required:true,
    trim:true,
  },
  img_front:{
    type:String,
    // required:true
  },
  img_back:{
    type:String,
    // required:true
  },
  condition:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  reason:{
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
  shipping_method:{
    type:String,
    required:true,
    trim:true,
  },
  mrp:{
    type:Number,
    required:true,
    trim:true
  },
  resell_price:{
    type:Number,
    required:true,
    trim:true
  }
})

//******************************** Collection Creation ******************************/
const products = mongoose.model("products", ProductSchema);
const users = mongoose.model("users", UserSchema);
const resell = mongoose.model("resell", ResellSchema);
