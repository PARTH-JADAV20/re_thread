import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {BrowserRouter, Routes, Link} from "react-router-dom"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor:"#a39984" , boxShadow:10}} className="AppBar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:"black", fontWeight:"bold" }}>
            ReThread
          </Typography>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold' , mx: 2}}><Link to="/sell" style={{ textDecoration: 'none', color: 'black' }}>Sell</Link></Button>
          <Button className='SignUpBtn' color="inherit" sx={{color:"black", fontWeight:'bold',backgroundColor: 'lightgrey', mx: 1}}><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link></Button>
          <Button className='LoginBtn' color="inherit" sx={{color:"black", fontWeight:'bold', backgroundColor: 'lightgray', mx: 1}}><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
