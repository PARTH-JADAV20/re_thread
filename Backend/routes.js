//********************************* Connection Requirements************************************* */
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`);
})

const mongoose = require("mongoose");
const uri = "mongodb+srv://deepanshidey03:ZmYkKdDeo6YDiJDt@cluster0.kwz2v2j.mongodb.net/";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// ***********************************List of Possible Routes*********************************
//***************************************** GET *******************************************
//Route for Home Page
app.get("/home",(req,res)=>{
    res.send("This is the Home Page")
})

//Route for SignUp Page
app.get("/sign-up",(req,res)=>{
    res.send("This is the Sign Up Page")
})

//Route for Login Page
app.get("/login",(req,res)=>{
    res.send("This is the Login Page")
})

//Route for Selling Page
app.get("/selling",(req,res)=>{
    res.send("This is the Selling Page")
})

//Route for Selling Form Page
app.get("/selling/product-form",(req,res)=>{
    res.send("This is the Selling Form Page")
})

// Route for all Products Page
app.get("/all-products",async(req,res)=>{
  try {
    const doc = await products.find();
    res.json(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for all Reselling submissions Page
app.get("/resell-storage",(req,res)=>{
  res.json(storage)
})

// Route to view all users
app.get("/all-users",(req,res)=>{
  res.json(users)
})

// Route to view to perticular user
app.get("/user/:id",(req,res)=>{
  const id = req.params.id
  res.json(users[id])
})

// Route for category's subcategories    5 dabba page
app.get("/:category/products",(req,res)=>{
  const product = products.hasOwnProperty(req.params.category)
  if(!product){
    res.status(404).send("No such Category found")
  } else{
    res.json(products[req.params.category])
  }
})

// Route for category's subcategories products
app.get("/:category/:subcat/products",(req,res)=>{
  const category = req.params.category;
  const subcat = req.params.subcat;

  if (!products.hasOwnProperty(category) || !products[category].hasOwnProperty(subcat)) {
    res.status(404).send("No such Category or Sub-Category found");
  } else {
    res.json(products[category][subcat]);
  }
});

// Route for subcategory's specific products
app.get("/:category/:subcat/products/:name",(req,res)=>{
  const category = req.params.category;
  const subcat = req.params.subcat;
  const name = req.params.name;

  if (!products.hasOwnProperty(category) || !products[category].hasOwnProperty(subcat)) {
    res.status(404).send("No such Category or Sub-Category found");
  } else {
    const product = products[category][subcat].find(product => product.name === name);
    if (!product) {
      res.status(404).send("No such Product found");
    } else {
      res.json(product);
    }
  }
});

// Route for user's profile
app.get("/user-profile/:id", (req, res) => {
  res.send(`User ${req.params.id}'s Profile`);
});

// Route for user's earning
app.get("/user-earning/:id", (req, res) => {
  res.send(`User ${req.params.id}'s Earning`);
});

// Route for user's shopping cart
app.get("/user-cart/:id", (req, res) => {
  res.send(`User ${req.params.id}'s Shopping Cart`);
});

// Route for user's order history
app.get("/user-order/:id", (req, res) => {
  res.send(`User ${req.params.id}'s Order History`);
});

// Route for user's payment
app.get("/user-payment/:id", (req, res) => {
  res.send(`User ${req.params.id}'s Payment`);
});

// Route for subcategory's product filter
app.get("/:category/:subcat/filter-products", (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  const color = req.query.color;
  const size = req.query.size;
  const gender = req.query.gender;
  const price = req.query.price;

  if (!products.hasOwnProperty(category) || !products[category].hasOwnProperty(subcat)) {
    res.status(404).send("No such Category or Sub-Category found");
  } else {
    let filteredProducts = products[category][subcat];

    if (color) {
      filteredProducts = filteredProducts.filter(product => product.color === color);
    }
    if (size) {
      filteredProducts = filteredProducts.filter(product => product.size === size);
    }
    if (gender) {
      filteredProducts = filteredProducts.filter(product => product.gender === gender);
    }
    if (price) {
      filteredProducts = filteredProducts.filter(product => product.price <= price);
    }
    res.json(filteredProducts);
  }
});


//************************************ POST ************************************

// Add a new product
app.post("/:category/:subcat/add-product", (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  products[category][subcat].push(req.body);
  res.send("Product added");
});

// Send Selling Form
app.post("/user-selling-form/:id", (req, res) => {
  const dataWithId = Object.assign({}, req.body, { id: req.params.id });
  Object.assign(storage,dataWithId);
  res.send(`Form submitted for ${req.params.id}`);
});

// Add new user
app.post("/new-user/:id", (req, res) => {
  const dataWithId = Object.assign({}, req.body, { id: req.params.id });
  Object.assign(users,dataWithId);
  res.send(`${req.body.name} added`);
});

//********************************** PUT ***************************************

// Updating details of a product
app.put("/:category/:subcat/product-update/:name", (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  const name = req.params.name;
  const index = products[category][subcat].findIndex((p)=>p.name === name )
  if (index === -1) {
    res.status(404).send("Product not found");
  } else {
    products[category][subcat][index] = { ...products[category][subcat][index], ...req.body };
    res.send(`${req.body.name} updated`);
  }
});

//********************************** PATCH ******************************************

// Updating a perticular detail of a product
app.patch("/:category/:subcat/partial-product-update/:name", (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  const name = req.params.name;
  const index = products[category][subcat].findIndex((p)=>p.name === name )
  if(index==-1){
    res.send("No such product found")
  } else {
    const productToUpdate = products[category][subcat][index];
    // Update specific fields if they exist in the request body
    if (req.body.name) productToUpdate.name = req.body.name;
    if (req.body.size) productToUpdate.size = req.body.size;
    if (req.body.price) productToUpdate.price = req.body.price;
    if (req.body.color) productToUpdate.color = req.body.color;

    res.send("Course partially updated");
  }
});

// Updating a perticular detail of a user
app.patch("/user-details-update/:id", (req, res) => {
  const id = req.params.id;
  const user = users.hasOwnProperty(id)
  if(!user){
    res.status(404).send("No such user found")
  } else {
    const userToUpdate = users[id];
    // Update specific fields if they exist in the request body
    if (req.body.name) userToUpdate.name = req.body.name;
    if (req.body.email) userToUpdate.email = req.body.email;
    if (req.body.password) userToUpdate.password = req.body.password;
    if (req.body.address) userToUpdate.address = req.body.address;
    if (req.body.earning) userToUpdate.earning = req.body.earning;
    if (req.body.cart) userToUpdate.cart = req.body.cart;

    res.send("User Details updated");
  }
});

//********************************** DELETE ******************************************

// Deleting a Product
app.delete("/:category/:subcat/delete-product/:name",(req,res)=>{
  const category = req.params.category;
  const subcat = req.params.subcat;
  const name = req.params.name;
  const index = products[category][subcat].findIndex((p)=>p.name === name )
  if(index==-1){
    res.send("No such product found")
  }
  else{
    products[category][subcat].splice(index,1)
    res.send(`Product ${name} deleted`)
  }
})

// Deleting a user
app.delete("/delete-user/:id",(req,res)=>{
  const id = req.params.id;
  const user = users.hasOwnProperty(id)
  if(!user){
    res.status(404).send("No such user found")
  }
  else{
    delete users[id]
    res.send(`User ${id} deleted`)
  }
})

//************************************************************************************
app.get("/*", (req, res) => {
  res.send("You are on worng route. Here's the list of possible routes");
});

