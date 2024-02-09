import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Footer from './Footer';
import { Link } from 'react-router-dom';

import WomenTops from './Tops.jpg';
import CTops from './CTops.webp';
import WomenBottomWears from './WBottomWears.avif';
import MBottomWears from './MBottomWears.webp';
import CBottomWears from './CBottomWears.jpg';
import WomenCoats from './WCoats.jpg';
import MCoats from './MCoats.png';
import CCoats from './CCoats.webp';
import WomenDresses from './Dresses.jpeg';
import CDresses from './CDresses.webp';
import WomenTraditionals from './WTraditionals.jpg';
import MTraditionals from './MTraditionals.jpg';
import CTraditionals from './CTraditionals.webp';
import Tshirts from './Tshirts.jpg';
import Shirts from './Shirts.avif';
import Heels from './Heels.webp';
import Crocs from './Crocs.jpg';
import Slippers from './Slippers.jpg';
import Shoes from './Shoes.avif';
import Boots from './Boots.jpg';
import Rings from './Rings.jpg';
import Bracelets from './Bracelets.webp';
import Bags from './Bags.webp';
import Necklaces from './Necklaces.avif';
import Earings from './Earings.jpg';

// Sample data for subcategories (replace with your actual data)
const subcategories = {
  1: ['WomenTops', 'WomenBottomWears', 'WomenCoats', 'WomenDresses', 'WomenTraditionals'],
  2: ['Tshirts', 'MBottomWears', 'MCoats', 'Shirts', 'MTraditionals'],
  3: ['CTops', 'CBottomWears', 'CCoats', 'CTraditionals', 'CDresses'],
  4: ['Heels', 'Crocs', 'Slippers', 'Shoes', 'Boots'],
  5: ['Rings', 'Bracelets', 'Bags', 'Necklaces', 'Earings'],
};

// Sample images for subcategories
const subcategoryImages = {
  WomenTops: WomenTops,
  CTops: CTops,
  WomenBottomWears: WomenBottomWears,
  MBottomWears: MBottomWears,
  CBottomWears: CBottomWears,
  WomenCoats: WomenCoats,
  MCoats: MCoats,
  CCoats: CCoats,
  WomenDresses: WomenDresses,
  CDresses: CDresses,
  WomenTraditionals: WomenTraditionals,
  MTraditionals: MTraditionals,
  CTraditionals: CTraditionals,
  Tshirts: Tshirts,
  Shirts: Shirts,
  Heels: Heels,
  Crocs: Crocs,
  Slippers: Slippers,
  Shoes: Shoes,
  Boots: Boots,
  Rings: Rings,
  Bracelets: Bracelets,
  Bags: Bags,
  Necklaces: Necklaces,
  Earings: Earings,
};
function Subcategory() {

  const { id } = useParams();
  console.log("id"); // Check if categoryId is correctly retrieved

  // Get the subcategories for the selected category ID
  const categorySubcategories = subcategories[id];
  console.log("categorySubcategories:", categorySubcategories); // Log categorySubcategories to inspect

  return (
    <>
      <div style={{ padding: '20px', marginLeft: '100px' }}>
        <h1>Choose Your Style</h1>
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '94%',
            justifyContent: 'space-around',
          }}
        >
          {/* Map through subcategories of the selected category and render cards */}
          {console.log(true)}
          {categorySubcategories &&
            categorySubcategories.map((subcategory, index) => (
              <Card key={index} sx={{ width: 300, marginBottom: 3 }}>
                <Link
                  to={`/products/${id}/${subcategory}`} // Assuming "/products/:categoryId/:subcategory" is your products page route
                  style={{ textDecoration: 'none', color: 'inherit' }} // Optional styling
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={subcategoryImages[subcategory]}
                      alt={subcategory}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {subcategory}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            ))}
        </Box>
      </div >
      <Footer />
    </>
  );
}

export default Subcategory;
