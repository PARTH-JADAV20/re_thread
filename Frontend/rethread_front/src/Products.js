import React, { useState } from 'react';
import Navbar from './Navbar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

function Products() {


  const handleSearchClick = () => {
    // Handle the search icon click event here
    console.log('Search icon clicked');
    // You can perform your search logic or any other actions here
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '17%', backgroundColor: '#f0f0f0', padding: '20px', alignContent: 'center', alignItems: 'center' }}>
        <h2>Filters</h2>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
        />
        <IconButton onClick={handleSearchClick} style={{ height: 60 }}>
          <SearchIcon />
        </IconButton>
        <Box style={{ width: '80%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
          <h3>Choose Color</h3>
        </Box>
        <Box style={{ width: '80%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
          <h3>Select Size</h3>
        </Box>
        <Box style={{ width: '80%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
          <h3>Choose Type</h3>
        </Box>
        <Box style={{ width: '80%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
          <h3>Choose Material</h3>
        </Box>
        <Box style={{ width: '80%', marginTop: '20px', backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
          <h3>Set Price Range</h3>
        </Box>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <Navbar />
        <h1>Showing Results for Products</h1>
      </div>
    </div>
  );
}
export default Products;