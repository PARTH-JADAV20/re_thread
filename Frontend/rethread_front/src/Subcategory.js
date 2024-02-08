import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Products'
import Footer from './Footer';

// Sample data for categories (replace with your actual data)
const categories = [
  { id: 1, name: 'Category 1', imageUrl: '/category1.jpg' },
  { id: 2, name: 'Category 2', imageUrl: '/category2.jpg' },
  { id: 3, name: 'Category 3', imageUrl: '/category3.jpg' },
  { id: 4, name: 'Category 4', imageUrl: '/category4.jpg' },
  { id: 5, name: 'Category 5', imageUrl: '/category5.jpg' },
];

function Subcategory() {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>Choose Your Style</h1>
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {/* Map through categories and render cards */}
          {categories.map((category) => (
            <Card
              key={category.id}
              sx={{ width: 300, marginBottom: 3 }}
              component={Link}
              to={"/products"}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={category.imageUrl}
                  alt={category.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default Subcategory;
