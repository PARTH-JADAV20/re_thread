import React from 'react';
import Navbar from './Navbar';
import mainside from "./mainside.png";
import gliterback from "./gliterback.jpg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Contact() {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ mb: 0.5, color: "black", fontSize: 18, fontFamily:"Roboto"}} color="text.secondary">
          We’re always here to help! If you have any questions, comments, or concerns, please feel free to reach out to us.<br/><br/>

          <strong>Email:</strong> support@rethread.com<br/>
          <strong>Phone:</strong> +1 (123) 456-7890<br/>
          <strong>Address:</strong> Lovely Professional University, Punjab 144411<br/><br/>

          Our customer service team is available Monday through Friday, from <strong>9:00 AM to 5:00 PM.</strong><br/><br/>

          We strive to respond to all inquiries within 24 hours.

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
        <Card variant="outlined" sx={{ backgroundColor:"#f7f4e9" }}>{card}</Card>
      </Box>
    </div>
  )
}

export default Contact
