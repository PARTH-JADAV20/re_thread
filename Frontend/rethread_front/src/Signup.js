import React from 'react'
import Navbar from './Navbar'
import gliterback from "./gliterback.jpg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Signup() {
  const card = (
    <React.Fragment>
      <CardContent sx={{ width: 400, display: "flex", flexDirection: "Column", alignContent: "center" }}>
        <Typography sx={{ mb: 0.5, color: "black", fontSize: 25, fontFamily: "Roboto", textAlign: "center" }} color="text.secondary">Sign Up</Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ alignContent: "center", marginTop: 2 }} />
        <TextField id="outlined-basic" label="Address" variant="outlined" sx={{ alignContent: "center", marginTop: 2 }} />
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ alignContent: "center", marginTop: 2 }} />
        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ alignContent: "center", marginTop: 2 }} />
        <Button sx={{
          backgroundColor: '#4d3d18',
          color: 'white',
          '&:hover': {
            backgroundColor: '#3b2e12',
          },
          padding: '10px 20px',
          borderRadius: '5px',
          marginTop:3,
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          Sign Up
        </Button>
      </CardContent>
    </React.Fragment>
  );
  return (
    <div style={{
      backgroundImage: `url(${gliterback})`,
      backgroundSize: 'cover', // ensures the image covers the entire div
      height: '100vh', // sets the height to 100% of the viewport height
      width: '100vw' // sets the width to 100% of the viewport width
    }}>
      <Navbar />
      <h1 style={{ fontSize: 60, fontWeight: "bolder", marginTop: 40, fontFamily: "Roboto", textAlign: "center" }}>ReThread</h1>
      <Box sx={{
        alignContent: "center",
        width: 480,
        marginTop: 5,
        boxShadow: 8,
        marginLeft: 'auto', // centers the box horizontally
        marginRight: 'auto', // centers the box horizontally
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // centers the card horizontally
        justifyContent: 'center', // centers the card vertically
      }}>
        <Card variant="outlined" sx={{ backgroundColor: '#f7f4e9' }}>{card}</Card>
      </Box>
    </div>
  )
}

export default Signup
