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
const port = 8000;

// Middleware to parse JSON body in requests
app.use(express.json());

app.listen(port,()=>{
    console.log(`App is Running on Port ${port}`);
})

// *********************************** IN MEMORY DATABASE *********************************

const products = {
  women: {
    top: [
      {
        name: "Floral Print Top",
        size: "M",
        color: "Blue",
        price: 20.00,
      },
      {
        name: "Striped Cotton Top",
        size: "S",
        color: "Red",
        price: 15.00,
      },
      {
        name: "Lace Trim Top",
        size: "S",
        color: "Pink",
        price: 25.00,
      },
      {
        name: "Polka Dot Top",
        size: "M",
        color: "Black",
        price: 18.00,
      }
    ],
    coat: [
      {
        name: "Winter Coat",
        size: "L",
        color: "Black",
        price: 120.00,
      },
      {
        name: "Trench Coat",
        size: "M",
        color: "Beige",
        price: 80.00,
      },
      {
        name: "Faux Fur Coat",
        size: "L",
        color: "White",
        price: 150.00,
      },
      {
        name: "Denim Jacket",
        size: "M",
        color: "Blue",
        price: 60.00,
      }
    ],
    dresses: [
      {
        name: "Floral Maxi Dress",
        size: "M",
        color: "Green",
        price: 40.00,
      },
      {
        name: "Lace Mini Dress",
        size: "S",
        color: "Black",
        price: 35.00,
      }
    ],
    traditionals: [
      {
        name: "Salwar Kameez",
        size: "M",
        color: "Red",
        price: 50.00,
      },
      {
        name: "Saree",
        size: "One Size",
        color: "Blue",
        price: 70.00,
      }
    ],
    bottomwear: [
      {
        name: "Skinny Jeans",
        size: "M",
        color: "Black",
        price: 30.00,
      },
      {
        name: "Pleated Skirt",
        size: "S",
        color: "Pink",
        price: 25.00,
      }
    ]
  },
  men: {
    shirts: [
      {
        name: "Casual Shirt",
        size: "L",
        color: "White",
        price: 30.00,
      },
      {
        name: "Formal Shirt",
        size: "M",
        color: "Black",
        price: 35.00,
      },
      {
        name: "Checked Shirt",
        size: "L",
        color: "Red",
        price: 32.00,
      },
      {
        name: "Plain Shirt",
        size: "M",
        color: "Blue",
        price: 28.00,
      }
    ],
    bottomwear: [
      {
        name: "Chinos",
        size: "L",
        color: "Beige",
        price: 40.00,
      },
      {
        name: "Jeans",
        size: "M",
        color: "Blue",
        price: 35.00,
      }
    ],
    traditionals: [
      {
        name: "Kurta",
        size: "L",
        color: "White",
        price: 30.00,
      },
      {
        name: "Sherwani",
        size: "M",
        color: "Gold",
        price: 80.00,
      }
    ],
    coats: [
      {
        name: "Blazer",
        size: "L",
        color: "Navy",
        price: 100.00,
      },
      {
        name: "Leather Jacket",
        size: "M",
        color: "Brown",
        price: 120.00,
      }
    ]
  },
  kids: {
    top: [
      {
        name: "T-shirt",
        size: "S",
        color: "Green",
        price: 10.00,
      },
      {
        name: "Sweater",
        size: "M",
        color: "Grey",
        price: 20.00,
      },
      {
        name: "T-shirt",
        size: "S",
        color: "Pink",
        price: 10.00,
      },
      {
        name: "Sweater",
        size: "M",
        color: "Purple",
        price: 20.00,
      }
    ],
    coat: [
      {
        name: "Hoodie",
        size: "S",
        color: "Blue",
        price: 25.00,
      },
      {
        name: "Parka",
        size: "M",
        color: "Black",
        price: 40.00,
      },
      {
        name: "Cardigan",
        size: "S",
        color: "White",
        price: 25.00,
      },
      {
        name: "Jacket",
        size: "M",
        color: "Black",
        price: 40.00,
      }
    ],
    traditionals: [
      {
        name: "Kurta Pyjama",
        size: "S",
        color: "Yellow",
        price: 30.00,
      },
      {
        name: "Dhoti",
        size: "M",
        color: "White",
        price: 15.00,
      },
      {
        name: "Lehenga",
        size: "S",
        color: "Red",
        price: 50.00,
      },
      {
        name: "Salwar Kameez",
        size: "M",
        color: "Blue",
        price: 40.00,
      }
    ],
    bottomwear: [
      {
        name: "Shorts",
        size: "S",
        color: "Red",
        price: 12.00,
      },
      {
        name: "Jeans",
        size: "M",
        color: "Blue",
        price: 18.00,
      },
      {
        name: "Skirt",
        size: "S",
        color: "Yellow",
        price: 15.00,
      },
      {
        name: "Leggings",
        size: "M",
        color: "Black",
        price: 12.00,
      }
    ],
    dresses: [
      {
        name: "Floral Dress",
        size: "S",
        color: "Pink",
        price: 30.00,
      },
      {
        name: "Lace Dress",
        size: "M",
        color: "White",
        price: 35.00,
      }
    ]
  },
  footwear: {
    slippers: [
      {
        name: "Rubber Slippers",
        size: "8",
        color: "Green",
        price: 10.00,
      },
      {
        name: "Fur Slippers",
        size: "9",
        color: "Pink",
        price: 20.00,
      }
    ],
    crocs: [
      {
        name: "Classic Crocs",
        size: "8",
        color: "Blue",
        price: 30.00,
      },
      {
        name: "Fuzzy Crocs",
        size: "9",
        color: "Purple",
        price: 35.00,
      }
    ],
    shoes: [
      {
        name: "Sneakers",
        size: "8",
        color: "White",
        price: 40.00,
      },
      {
        name: "Boots",
        size: "9",
        color: "Black",
        price: 50.00,
      }
    ],
    heels:[
      {
        name: "Stylish block Heels",
        size: "6",
        color: "White",
        price: 40.00,
      },
      {
        name: "Pencil heels",
        size: "6",
        color: "black",
        price: 40.00,
      }
    ]
  },
  accessories: {
    bags: [
      {
        name: "Leather Backpack",
        size: "M",
        color: "Brown",
        price: 80.00
      },
      {
        name: "Canvas Messenger Bag",
        size: "L",
        color: "Black",
        price: 60.00
      },
      {
        name: "Tote Bag",
        size: "M",
        color: "Beige",
        price: 50.00
      },
      {
        name: "Clutch Bag",
        size: "S",
        color: "Red",
        price: 40.00
      }
    ],
    rings: [
      {
        name: "Silver Band Ring",
        size: "10",
        color: "Silver",
        price: 20.00
      },
      {
        name: "Gold Signet Ring",
        size: "11",
        color: "Gold",
        price: 40.00
      },
      {
        name: "Diamond Ring",
        size: "6",
        color: "Silver",
        price: 100.00
      },
      {
        name: "Pearl Ring",
        size: "7",
        color: "Gold",
        price: 80.00
      }
    ],
    bracelets: [
      {
        name: "Leather Bracelet",
        size: "M",
        color: "Black",
        price: 15.00
      },
      {
        name: "Beaded Bracelet",
        size: "L",
        color: "Multicolor",
        price: 10.00
      },
      {
        name: "Charm Bracelet",
        size: "M",
        color: "Silver",
        price: 30.00
      },
      {
        name: "Cuff Bracelet",
        size: "L",
        color: "Gold",
        price: 35.00
      }
    ],
    hats: [
      {
        name: "Fedora Hat",
        size: "M",
        color: "Grey",
        price: 25.00
      },
      {
        name: "Baseball Cap",
        size: "L",
        color: "Blue",
        price: 15.00
      },
      {
        name: "Beret Hat",
        size: "M",
        color: "Black",
        price: 25.00
      },
      {
        name: "Sun Hat",
        size: "L",
        color: "White",
        price: 20.00
      }
    ],
    shades: [
      {
        name: "Aviator Sunglasses",
        size: "M",
        color: "Black",
        price: 30.00
      },
      {
        name: "Wayfarer Sunglasses",
        size: "L",
        color: "Brown",
        price: 35.00
      },
      {
        name: "Cat Eye Sunglasses",
        size: "M",
        color: "Black",
        price: 30.00
      },
      {
        name: "Round Sunglasses",
        size: "L",
        color: "Pink",
        price: 35.00
      }
    ],
    bangles: [
      {
        name: "Wooden Bangles",
        size: "M",
        color: "Brown",
        price: 15.00
      },
      {
        name: "Metal Bangles",
        size: "L",
        color: "Silver",
        price: 20.00
      }
    ],
    earring: [
      {
        name: "Stud Earrings",
        size: "S",
        color: "White",
        price: 10.00
      },
      {
        name: "Hoop Earrings",
        size: "M",
        color: "Gold",
        price: 15.00
      }
    ]
  }
};

const storage = {

};

const users = {
  sid123 :{
    id:"sid123",
    name:"Siddarth",
    email:"siddarth@gmail.com",
    password:"12345",
    address:"Guwahati",
    earning:"550",
    cart : []
  },
  dee321 :{
    id:"dee321",
    name:"Deepanshi",
    email:"deepanshi@gmail.com",
    password:"54321",
    address:"Guwahati",
    earning:"0",
    cart : ["Winter Coat"]
  }
}

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
app.get("/all-products",(req,res)=>{
    res.json(products)
})

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


