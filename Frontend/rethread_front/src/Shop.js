import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import shoptop from './shoptop.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import women from './women.jpg'
import men from './men.avif'
import kids from './kids.jpg'
import footwear from './footwear.avif'
import accessories from './accessories.webp'
import trend1 from './trend1.jpg'
import trend2 from './trend2.webp'
import trend3 from './trend3.jpg'
import trend4 from './trend4.webp'
import trend5 from './trend5.webp'
import trend6 from './trend6.webp'
import trend7 from './trend7.jpg'
import trend8 from './trend8.avif'
import dis1 from './dis1.jpg'
import dis2 from './dis2.jpg'
import dis3 from './dis3.jpg'
import dis4 from './dis4.jpg'
import dis5 from './dis5.jpg'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Shop() {

  const [marginLeft, setMarginLeft] = useState(0);

  const trendImages = [
    { image: trend1, title: "Women's Long Coat" },
    { image: trend2, title: "Men's Suit" },
    { image: trend3, title: "Gradient Shades" },
    { image: trend4, title: "Couple Rings" },
    { image: trend5, title: "Premium Wallet" },
    { image: trend6, title: "Combat Boots" },
    { image: trend7, title: "Jhumkas" },
    { image: trend8, title: "Leather Bracelets" },
    // Add more trend objects as needed
  ];
  const cardsToShow = 5; // Number of cards to show at a time

  const handleLeftClick = () => {
    setMarginLeft((prevMargin) => Math.max(prevMargin - 1, 0));
  };
  const totalCards = trendImages.length;
  
  const handleRightClick = () => {
    const maxMargin = Math.max(0, totalCards - cardsToShow);
    setMarginLeft((prevMargin) => Math.min(prevMargin + 1, maxMargin));
  };

  return (
    <>
      <div>
        <Navbar />
        <img src={shoptop} style={{ width: '100%', height: '310px' }} />
        <h1 style={{
          position: 'absolute',
          top: '21%',
          left: '35%',
          color: "white",
          alignItems: 'center',
          textAlign: 'center',
          fontSize: 60,
          fontWeight: 'bolder',
          fontFamily: 'Roboto'
        }}>
          20% Off On Jackets
        </h1>

        <Box sx={{
          alignContent: "center",
          width: 1480,
          marginTop: 5,
          boxShadow: 8,
          marginLeft: 'auto',
          marginBottom: 3,
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Shop By Category</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 2, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to='/products'>
                <CardMedia
                  component="img"
                  height="180"
                  image={women}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shop for Women
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={men}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shop for Men
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={kids}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shop for Kids
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={footwear}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shop for Footwear
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 2, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={accessories}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shop for Accessories
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Box >

        <Box sx={{
          alignContent: "center",
          width: 1480,
          marginTop: 5,
          boxShadow: 8,
          marginLeft: 'auto',
          marginBottom: 3,
          marginRight: 'auto',
          display: 'flex',
          overflowX:'hidden',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Shop By Trending</h2>
          <div style={{ display: 'flex', flexDirection: 'row', marginLeft: -marginLeft * 270 }}>
            {trendImages.slice(marginLeft, marginLeft + 5).map((trend, index) => (
              <Card
                key={index}
                className='animate_from_bottom'
                sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}
              >
                <CardActionArea component={Link} to="/products" target="_blank">
                  <CardMedia component="img" height="180" image={trend.image} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {trend.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>

          <IconButton sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgrey'}
          }} 
          onClick={handleLeftClick} disabled={marginLeft === 0}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgrey'}
          }} 
          onClick={handleRightClick} disabled={marginLeft >= trendImages.length - 5}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>

        <Box sx={{
          alignContent: "center",
          width: 1480,
          marginTop: 5,
          boxShadow: 8,
          marginLeft: 'auto',
          marginBottom: 3,
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Products On Discount</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={dis1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Men's Cotton Shirts
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={dis2}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Women's Tops
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={dis3}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bagacks
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={dis4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Jeans
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={dis5}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sneakers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Box >
      </div >
      <Footer />
    </>
  )
}

export default Shop
