import React from 'react';
import { Box, Checkbox, TextField, IconButton, InputAdornment, FormGroup, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom"
import Footer from './Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const domain  = process.env.REACT_APP_DOMAIN

const price = [
  {
    value: 0,
    label: '0'
  },
  {
    value: 20,
    label: '100',
  },
  {
    value: 40,
    label: '500',
  },
  {
    value: 60,
    label: '1000',
  },
  {
    value: 80,
    label: '1500',
  },
  {
    value: 100,
    label: '2000',
  }
];

function valuetext(label) {
  return `${label}`;
}


function Products() {

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);



  // Handler function to update selected colors
  const handleColorChange = (color) => {
    setSelectedColors((prevSelectedColors) => {
      if (prevSelectedColors.includes(color)) {
        // If color is already selected, remove it
        return prevSelectedColors.filter((selectedColor) => selectedColor !== color);
      } else {
        // If color is not selected, add it
        return [...prevSelectedColors, color];
      }
    });
  };


  const handleSizeChange = (size) => {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        // If size is already selected, remove it
        return prevSelectedSizes.filter((selectedSize) => selectedSize !== size);
      } else {
        // If size is not selected, add it
        return [...prevSelectedSizes, size];
      }
    });
  }

  const handleSearchClick = () => {
    console.log('Search icon clicked');
    // Handle search logic or any other actions here
  };


  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div style={{ width: '18%', backgroundColor: '#f0f0f0', padding: '20px', alignContent: 'center', alignItems: 'center', height: '100%', overflowY: 'auto' }}>
          <h2>Filters</h2>
          <TextField
            id="filled-basic"
            label="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearchClick}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box className="selectColor" style={{ width: '90%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Select Color</h3>
            <FormGroup
              column
              aria-label="color"
              name="color"
              value={selectedColors}
              onChange={handleColorChange}
            >
              <FormControlLabel
                value="maroon"
                control={<Checkbox checked={selectedColors.includes('maroon')} onChange={() => handleColorChange('maroon')} style={{ color: 'maroon' }} />}
                label="Maroon"
              />
              <FormControlLabel
                value="red"
                control={<Checkbox checked={selectedColors.includes('red')} onChange={() => handleColorChange('red')} style={{ color: 'red' }} />}
                label="Red"
              />
              <FormControlLabel
                value="Pink"
                control={<Checkbox checked={selectedColors.includes('pink')} onChange={() => handleColorChange('pink')} style={{ color: 'pink' }} />}
                label="Pink"
              />
              <FormControlLabel
                value="Orange"
                control={<Checkbox checked={selectedColors.includes('orange')} onChange={() => handleColorChange('orange')} style={{ color: 'orange' }} />}
                label="Orange"
              />
              <FormControlLabel
                value="Green"
                control={<Checkbox checked={selectedColors.includes('green')} onChange={() => handleColorChange('green')} style={{ color: 'green' }} />}
                label="Green"
              />
              <FormControlLabel
                value="Black"
                control={<Checkbox checked={selectedColors.includes('black')} onChange={() => handleColorChange('black')} style={{ color: 'black' }} />}
                label="Black"
              />
              <FormControlLabel
                value="Navy"
                control={<Checkbox checked={selectedColors.includes('navy')} onChange={() => handleColorChange('navy')} style={{ color: 'navy' }} />}
                label="Navy"
              />
              <FormControlLabel
                value="Blue"
                control={<Checkbox checked={selectedColors.includes('blue')} onChange={() => handleColorChange('blue')} style={{ color: 'blue' }} />}
                label="Blue"
              />
              <FormControlLabel
                value="Yellow"
                control={<Checkbox checked={selectedColors.includes('yellow')} onChange={() => handleColorChange('yellow')} style={{ color: 'yellow' }} />}
                label="Yellow"
              />
              <FormControlLabel
                value="Cream"
                control={<Checkbox checked={selectedColors.includes('beige')} onChange={() => handleColorChange('beige')} style={{ color: 'beige' }} />}
                label="Cream"
              />
              <FormControlLabel
                value="Grey"
                control={<Checkbox checked={selectedColors.includes('grey')} onChange={() => handleColorChange('grey')} style={{ color: 'grey' }} />}
                label="Grey"
              />
              {/* Add other color options as needed */}
            </FormGroup>
          </Box>

          <Box className="selectSize" style={{ width: '90%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Select Size</h3>
            <FormGroup
              column
              aria-label="color"
              name="color"
              value={selectedColors}
              onChange={handleColorChange}
            >
              <FormControlLabel
                value="XS"
                control={<Checkbox checked={selectedSizes.includes('XS')} onChange={() => handleSizeChange('XS')} />}
                label="XS"
              />
              <FormControlLabel
                value="S"
                control={<Checkbox checked={selectedSizes.includes('S')} onChange={() => handleSizeChange('S')} />}
                label="S"
              />
              <FormControlLabel
                value="M"
                control={<Checkbox checked={selectedSizes.includes('M')} onChange={() => handleSizeChange('M')} />}
                label="M"
              />
              <FormControlLabel
                value="L"
                control={<Checkbox checked={selectedSizes.includes('L')} onChange={() => handleSizeChange('L')} />}
                label="L"
              />
              <FormControlLabel
                value="XL"
                control={<Checkbox checked={selectedSizes.includes('XL')} onChange={() => handleSizeChange('XL')} />}
                label="XL"
              />
              <FormControlLabel
                value="XXL"
                control={<Checkbox checked={selectedSizes.includes('XXL')} onChange={() => handleSizeChange('XXL')} />}
                label="XXL"
              />
            </FormGroup>
          </Box>

          <Box className="selectPrice" style={{ width: '90%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Set Price Range</h3>
            <Slider
              sx={{ width: '90%' }}
              aria-label="Always visible"
              defaultValue={80}
              getAriaValueText={valuetext}
              step={10}
              marks={price}
            />

          </Box>
        </div>

        <div style={{ flex: 1, padding: '20px' }}>
          <h1>Showing Results for Products</h1>

          <Box
            style={{
              backgroundColor: 'white',
              boxShadow: '0 5px 5px rgba(0, 0, 0, 0.3)',
              height: 'fit-content',
              overflowY: 'hidden',
              padding: '10px',
              marginTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            
            <Card className='animate_from_bottom' sx={{ width: 250, height: 350, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/item">
                <CardMedia
                  component="img"
                  height="190"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    product_name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    size
                  </Typography>
                  <Typography variant="h5" color='black'>
                    price
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    MRP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
