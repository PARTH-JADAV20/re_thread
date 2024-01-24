const express = require("express");
const mongoose = require("mongoose");

//********************************** Connection with DB********************************* */
const uri = "mongodb://127.0.0.1:27017/ReThread";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

//************************************ Defining Schema *********************************** */

//********************* Product Schema *****************/
const Schema1 = mongoose.Schema;
const ProductSchema = new Schema1({
  product_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  category:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  sub_cat:{
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
const Schema2 = mongoose.Schema;
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
const Schema3 = mongoose.Schema;
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
  color:{
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

//*****************************  Sample document entries ****************************/
const product1 = new products({
  product_name: "Long Trench Coat",
  category:"Women",
  sub_cat:"Coats",
  size: "M",
  color: "Grey",
  material:"Wool",
  brand:"Athena",
  price: 450
});
const product2 = new products({
  product_name: "Floral Maxi Dress",
  category:"Women",
  sub_cat:"Dresses",
  size: "S",
  color: "Peach",
  material:"Synthetic",
  brand:"DressBerry",
  price: 270
});

const user1 = new users({
  user_name: "user1",
  email: "user1@example.com",
  contact:9395208190,
  address:"Guwahati",
  earning:0,
  cart:[],
});

const user2 = new users({
  user_name: "user2",
  email: "user2@example.com",
  contact:9345208198,
  address:"Delhi",
  earning:120,
  cart:["Running Shoes","Heeled Boots"],
});

const resell1 = new resell({
  user_name: "user2",
  product_name:"Printed T-Shirt",
  description:"Tshirt with stunning Planet Prints",
  size:"S",
  color:"Blue",
  condition:"Excellent",
  reason:"Didn't fit",
  material:"Cotton",
  brand:"Kinsey",
  shipping_method:"Local Delivery",
  mrp:500,
  resell_price:250
});

const resell2 = new resell({
  user_name: "user1",
  product_name:"Formal Blazer",
  description:"Slim Fit Black Formal Blazer",
  size:"M",
  color:"Black",
  condition:"Excellent",
  reason:"Didn't use much",
  material:"Polyester",
  brand:"Mast & Harbour",
  shipping_method:"Speed Post",
  mrp:700,
  resell_price:340
});

// ************************* Add sample documents to the database ***************************
const addDocsToDB = async () => {
  try {
    await product1.save();
    console.log("Product 1 added successfully!");
    await product2.save();
    console.log("Product 1 added successfully!");

    await user1.save();
    console.log("User 1 added successfully!");
    await user2.save();
    console.log("User 2 added successfully!");

    await resell1.save();
    console.log("Resell Product 1 added successfully!");
    await resell2.save();
    console.log("Resell Product 2 added successfully!");

  } catch (error) {
    console.error("Error adding users:", error);
  }
};
addDocsToDB();
