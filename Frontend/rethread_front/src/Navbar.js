import * as React from 'react';   // includes useStake hook
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

export default function Navbar() {
    // State to manage the item count
    const [cartItemCount, setCartItemCount] = React.useState(0);

    // Example function to increment the item count (replace with your actual logic)
    const incrementItemCount = () => {
      setCartItemCount(prevCount => prevCount + 1);
    };
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#a39984", boxShadow: 10 }} className="AppBar" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>ReThread</Link>
          </Typography>

          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/sell" style={{ textDecoration: 'none', color: 'black' }}>Sell</Link></Button>
          <Button className='SignUpBtn' color="inherit" sx={{ color: "black", fontWeight: 'bold', backgroundColor: 'lightgrey', mx: 1 }}><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link></Button>
          <Button className='LoginBtn' color="inherit" sx={{ color: "black", fontWeight: 'bold', backgroundColor: 'lightgray', mx: 1 }}><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></Button>

          <IconButton color="inherit" onClick={incrementItemCount}>
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
