// ************************************List Of Features:***************************************
// For Buyers
// SignUp and Login
// Filter Option
// Search Option
// Product selection and Viewing
// Cart Option
// Payment Gateway

// For Sellers
// SignUp and Login
// Option for Listing clothes to be sold
// Device Gallery access and Image selection feature

//*********************************************************************************************

const express = require("express");
const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log(`App is Running on Port ${port}`);
})

// ***********************************List of Possible Routes*********************************


//Route for Home Page
app.get("/home",(req,res)=>{
    res.send("This is the Home Page")
})

//Route for SignUp Page
app.get("/sign-up",(req,res)=>{
    res.send("This is the Home Page")
})

//Route for Login Page
app.get("/login",(req,res)=>{
    res.send("This is the Home Page")
})

//Route for Selling Page
app.get("/selling",(req,res)=>{
    res.send("This is the Home Page")
})

//Route for Selling Form Page
app.get("/selling/product-form",(req,res)=>{
    res.send("This is the Home Page")
})

// Route for all Products Page
app.get("/all-products",(req,res)=>{
    res.send("All Products Route")
})

// Route for all women's products
app.get("/women/products",(req,res)=>{
    res.send("All Women Products Route")
})

// Route for all women's sub-products
app.get("/women/products/traditionals",(req,res)=>{
    res.send("All Women Sub-Products Route")
})

// Route for women's sub-products filter
app.get("/women/products/traditionals/filter/color?color=red&category=kurta",(req,res)=>{
    res.send("All Women specific sub-Products Filteing Red color kurta Route")
})


// Route for women's sub-products search
app.get("/women/products/traditionals/search",(req,res)=>{
    res.send("All Women specific sub-Products Search Route")
})

// Route for women's specific sub-products
app.get("/women/products/traditionals/:id",(req,res)=>{
    res.send("All Women specific sub-Products Route")
})

// Route for all men's products
app.get("/men/products", (req, res) => {
    res.send("All Men's Products Route");
});

// Route for all children's products
app.get("/children/products", (req, res) => {
    res.send("All Children's Products Route");
});

// Route for all footwear products
app.get("/footwear/products", (req, res) => {
    res.send("All Children's Products Route");
});

// Route for all accessories products
app.get("/accessories/products", (req, res) => {
    res.send("All Children's Products Route");
});

// Route for a specific product
app.get("/product/:id", (req, res) => {
    res.send(`Product ID: ${req.params.id}`);
});

// Route for user's profile
app.get("/user/:id/profile", (req, res) => {
    res.send(`User ${req.params.id}'s Profile`);
});

// Route for user's earning
app.get("/user/:id/earning", (req, res) => {
    res.send(`User ${req.params.id}'s Earning`);
});

// Route for user's shopping cart
app.get("/user/:id/cart", (req, res) => {
    res.send(`User ${req.params.id}'s Shopping Cart`);
});

// Route for user's order history
app.get("/user/:id/orders", (req, res) => {
    res.send(`User ${req.params.id}'s Order History`);
});

// Route for user's payment
app.get("/user/:id/payment", (req, res) => {
    res.send(`User ${req.params.id}'s Payment`);
});


