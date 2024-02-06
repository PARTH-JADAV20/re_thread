import React, { useState, useEffect } from 'react';
import { TextField, Typography, IconButton, Grid, Box, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { InputAdornment } from '@mui/material';
import Container from '@mui/material/Container';
import Footer from './Footer';
import axios, { isCancel, AxiosError } from 'axios';
import SaveIcon from '@mui/icons-material/Save';

const ModifyProductDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8000/all-products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [products]);


  const handleSearch = () => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const handleEdit = (field, productId, value) => {
    const updatedProducts = filteredProducts.map((product) =>
      product.id === productId ? { ...product, [field]: value } : product
    );
    setFilteredProducts(updatedProducts);
  };

  
  const handleSave = (productId) => {
    const userToUpdate = products.find(product => product.id === productId);
    axios.put(`http://localhost:8000/update-user/${productId}`, userToUpdate)
      .then((response) => {
        // Handle successful update
        console.log("User updated successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating user:", error);
      });
  };

  const handleDelete = (productId) => {
    const updatedProducts = filteredProducts.filter((product) => product.id !== productId);
    setFilteredProducts(updatedProducts);
  };


  return (
    <>
      <Container component="main" maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          View Product Details
        </Typography>
        <TextField
          type="text"
          placeholder="Search product by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          label="Search Product"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{ marginBottom: '20px' }}
        />

        {filteredProducts.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No products found.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} key={product.id}>
                <Box
                  style={{
                    border: '1px solid #ddd',
                    padding: '20px',
                    marginBottom: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    src={product.image}
                    alt={`Image of ${product.title}`}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      marginBottom: '10px',
                      border: '2px solid #ccc',
                      backgroundColor: '#f0f0f0',
                    }}
                  />
                  <div>
                  <IconButton onClick={() => handleDelete(product.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="success" onClick={() => handleSave(product.id)}>
                    <SaveIcon />
                  </IconButton>
                </div>
                <TextField
                  label="Title"
                  value={product.product_name}
                  onChange={(e) => handleEdit('title', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Description"
                  value={product.description}
                  onChange={(e) => handleEdit('description', product.id, e.target.value)}
                  variant="outlined"
                  multiline
                  rows={3}
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Category"
                  value={product.category}
                  onChange={(e) => handleEdit('category', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Subcategory"
                  value={product.sub_cat}
                  onChange={(e) => handleEdit('subcategory', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Brand"
                  value={product.brand}
                  onChange={(e) => handleEdit('brand', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Size"
                  value={product.size}
                  onChange={(e) => handleEdit('size', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Color"
                  value={product.color}
                  onChange={(e) => handleEdit('color', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Material"
                  value={product.material}
                  onChange={(e) => handleEdit('material', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="MRP"
                  value={product.mrp}
                  onChange={(e) => handleEdit('mrp', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Price"
                  value={product.price}
                  onChange={(e) => handleEdit('price', product.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
              </Box>
              </Grid>
        ))}
      </Grid>
        )}
    </Container >
      <Footer />
    </>
  );
};

export default ModifyProductDetails;

