import React from 'react';
import Navbar from './Navbar';
import mainside from "./mainside.png";
import gliterback from "./gliterback.jpg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function About() {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ mb: 0.5 , color:"black", fontSize:17, fontFamily:"Roboto"}} color="text.secondary">
          "Welcome to our platform, a place where we firmly believe in the power of second chances! Our mission is to create a sustainable fashion ecosystem that benefits everyone involved.<br /><br />

          Our platform serves as a bridge between individuals who are looking to de-clutter their wardrobes and those who are in search of affordable clothing options. We understand that affordability should not compromise quality. Therefore, we have a stringent verification process in place. Each item listed on our platform undergoes this process to ensure it meets our high-quality standards.<br /><br />

          But our platform is more than just a marketplace. It’s a community of fashion-conscious individuals who understand the value of each garment and believe in extending its lifecycle. By choosing to purchase pre-loved items, our customers contribute to reducing fashion waste and promoting sustainability.<br /><br />

          So, join us in our journey to transform wardrobes across the world. Together, we can make a difference. Together, we can give fashion a second chance."
        </Typography>

      </CardContent>
    </React.Fragment>
  );
  return (
    <div style={{
      backgroundImage: `url(${mainside}), url(${gliterback})`, // switches the order of the images
      backgroundPosition: "right, center", // positions the images
      backgroundRepeat: "no-repeat, no-repeat", // prevents the images from repeating
      backgroundSize: "40% 100%, cover", // scales the images
      height: '100vh', // sets the height to 100% of the viewport height
      width: '100vw' // sets the width to 100% of the viewport width
    }}>
      <Navbar />
      <h1 style={{ fontSize: 60, fontWeight: "bolder", marginLeft: 350, marginTop: 40 , fontFamily:"Roboto"}}>ReThread</h1>
      <Box sx={{
        width: 780,
        marginTop: 3,
        boxShadow: 8,
        marginLeft: 9,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // aligns the card to the left
        justifyContent: 'center', // centers the card vertically
      }}>
        <Card variant="outlined" sx={{ backgroundColor: '#f7f4e9' }}>{card}</Card>
      </Box>
    </div>
  )
}

export default About
