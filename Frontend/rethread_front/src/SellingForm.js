import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Textarea from '@mui/joy/Textarea';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import gliterback from "./gliterback.jpg"
import Footer from './Footer';


function SellingForm() {

  const [resellingPrice, setResellingPrice] = useState(0);
  const [buyerPays, setBuyerPays] = useState(0);
  const [youGet, setYouGet] = useState(0);

  const handleResellingPriceChange = (event) => {
    const price = parseFloat(event.target.value);
    setResellingPrice(price);
    setBuyerPays(price);
    setYouGet(Math.round(0.7 * price));
  };

  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);

  const handleFrontChange = (event) => {
    const file = event.target.files[0];
    setFront(URL.createObjectURL(file));
  };

  const handleBackChange = (event) => {
    const file = event.target.files[0];
    setBack(URL.createObjectURL(file));
  };

  return (
    <>
      <div style={{
        backgroundImage: `url(${gliterback})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '810px',
        width: '100%',
        paddingTop: '1px',  // Adjust the top padding to create space at the top
      }}>
        <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Product Selling Form</h1>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 960,
          backgroundColor: 'white',
          marginTop: 5,  // Adjust the margin-top to move the box down
          boxShadow: 8,
          marginLeft: 'auto',
          marginRight: 'auto',

        }}>
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={productTypes}
              sx={{ width: 300, marginTop: 3 }}
              renderInput={(params) => <TextField {...params} label="Product" />}
            />
            <Textarea name="Outlined" placeholder="Desciption of Product" variant="outlined" minRows={3} sx={{ width: 300, marginTop: 2 }} />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={materials}
              sx={{ width: 300, marginTop: 2 }}
              renderInput={(params) => <TextField {...params} label="Material" />}
            />

            <TextField id="outlined-basic" label="Brand" variant="outlined" sx={{ width: 300, marginTop: 2 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={materials}
                sx={{ width: '48%', marginTop: 2 }} // Adjusted width for Size
                renderInput={(params) => <TextField {...params} label="Size" />}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={colors}
                sx={{ width: '48%', marginTop: 2 }} // Adjusted width for Color
                renderInput={(params) => <TextField {...params} label="Color" />}
              />
            </div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={conditions}
              sx={{ width: 300, marginTop: 2 }}
              renderInput={(params) => <TextField {...params} label="Condition" />}
            />

            <Textarea name="Outlined" placeholder="Reason for Re-Selling" variant="outlined" minRows={3} sx={{ width: 300, marginTop: 2, marginBottom: 3 }} />
          </div>
          <div div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 5 }}>
                <Box sx={{ width: '188px', height: 120, marginTop: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input type="file" id="front" name="front" accept="image/*" style={{ display: 'none' }} onChange={handleFrontChange} />
                  <label htmlFor="front">
                    {front ? <Avatar src={front} alt="front" style={{ width: 70, height: 70, marginTop: 5 }} /> : <Avatar alt="Front" style={{ width: 70, height: 70, marginTop: 5 }}>1</Avatar>}
                  </label>
                  <p>Front Image</p>
                </Box>
                <Box sx={{ width: '188px', height: 120, marginTop: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input type="file" id="back" name="back" accept="image/*" style={{ display: 'none' }} onChange={handleBackChange} />
                  <label htmlFor="back">
                    {back ? <Avatar src={back} alt="Image 2" style={{ width: 70, height: 70, marginTop: 5 }} /> : <Avatar alt="Back" style={{ width: 70, height: 70, marginTop: 5 }}>2</Avatar>}
                  </label>
                  <p>Back Image</p>
                </Box>
              </div>
            </div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={shippingMethods}
              sx={{ width: 300, marginTop: 2 }}
              renderInput={(params) => <TextField {...params} label="Shipping Method" />}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField id="outlined-basic" label="MRP" variant="outlined" sx={{ width: '48%', marginTop: 2 }} />
              <TextField id="outlined-basic" label="Reselling Price" variant="outlined" sx={{ width: '48%', marginTop: 2 }} onChange={handleResellingPriceChange} />
            </div>

            <Box sx={{ width: '100%', marginTop: 2, padding: 2, border: '1px solid #ccc', borderRadius: 5 }}>
              <Typography variant="h6" gutterBottom>
                Price Breakdown
              </Typography>
              <div style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    Buyer Pays (Rs)
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    You Get (Rs)
                  </Typography>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontSize: 30 }}>
                    {buyerPays}
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontSize: 30 }}>
                    {youGet}
                  </Typography>
                </div>
              </div>
              <div style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    Resale Price
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    Resale Price - ReThread Commission
                  </Typography>
                </div>
              </div>
            </Box>
          </div>
        </Box >

        <Button sx={{
          backgroundColor: '#4d3d18',
          color: 'white',
          '&:hover': {
            backgroundColor: '#3b2e12',
          },
          padding: '10px 20px',
          borderRadius: '5px',
          marginTop: '20px',
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: 'bold',
          alignItems: 'center',
          width: '25%',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}>
          Submit Form
        </Button>
      </div >
      <Footer />
    </>
  )
}

const productTypes = [
  // Summer Wear
  { label: 'Tops' },
  { label: 'Shorts' },
  { label: 'T-Shirts' },
  { label: 'Blouses' },
  { label: 'Skirts' },
  { label: 'Dresses' },
  { label: 'Tank Tops' },
  { label: 'Swimwear' },
  { label: 'Sarongs' },
  { label: 'Flip Flops' },
  { label: 'Sunglasses' },
  { label: 'Hats' },
  // Winter Wear
  { label: 'Coats' },
  { label: 'Jackets' },
  { label: 'Sweaters' },
  { label: 'Hoodies' },
  { label: 'Cardigans' },
  { label: 'Scarves' },
  { label: 'Gloves' },
  { label: 'Beanies' },
  { label: 'Boots' },
  { label: 'Thermal Wear' },
  // Common Categories
  { label: 'Jeans' },
  { label: 'Pants' },
  { label: 'Leggings' },
  { label: 'Sarees' },
  { label: 'Kurtas' },
  { label: 'Suits' },
  { label: 'Jumpsuits' },
  { label: 'Formal Wear' },
  { label: 'Sportswear' },
  { label: 'Casual Wear' },
  // Add more categories as needed
];


const materials = [
  { label: 'Cotton' },
  { label: 'Polyester' },
  { label: 'Leather' },
  { label: 'Denim' },
  { label: 'Wool' },
  { label: 'Silk' },
  { label: 'Linen' },
  { label: 'Spandex' },
  { label: 'Rayon' },
  { label: 'Nylon' },
  { label: 'Velvet' },
  { label: 'Fur' },
  { label: 'Satin' },
  { label: 'Cashmere' },
  { label: 'Chiffon' },
  { label: 'Lace' },
  { label: 'Tulle' },
  { label: 'Canvas' },
  { label: 'Rubber' },
  { label: 'Suede' },
  { label: 'Synthetic' },
  { label: 'Acrylic' },
  { label: 'Jersey' },
  // Add more materials as needed
];


const sizes = [
  { label: 'XS' },
  { label: 'S' },
  { label: 'M' },
  { label: 'L' },
  { label: 'XL' },
  { label: 'XXL' },
];

const colors = [
  { label: 'Red' },
  { label: 'Blue' },
  { label: 'Green' },
  { label: 'Black' },
  { label: 'White' },
  { label: 'Yellow' },
  { label: 'Pink' },
  { label: 'Purple' },
  { label: 'Orange' },
  { label: 'Brown' },
  { label: 'Gray' },
  { label: 'Beige' },
  { label: 'Navy' },
  { label: 'Teal' },
  { label: 'Turquoise' },
  { label: 'Magenta' },
  { label: 'Maroon' },
  { label: 'Lavender' },
  { label: 'Olive' },
  { label: 'Coral' },
  { label: 'Indigo' },
  { label: 'Violet' },
  // Add more colors as needed
];


const conditions = [
  { label: 'New with tags' },
  { label: 'New without tags' },
  { label: 'Like new' },
  { label: 'Gently used' },
  { label: 'Well used' },
];

const shippingMethods = [
  { label: 'Standard Shipping' },
  { label: 'Express Shipping' },
  { label: 'Free Shipping' },
];

export { productTypes, materials, sizes, colors, conditions, shippingMethods };


export default SellingForm
