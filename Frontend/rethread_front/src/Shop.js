import React, { useState } from 'react';
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
import './Shop.css'
import dis1 from './dis1.jpg'
import dis2 from './dis2.jpg'
import dis3 from './dis3.jpg'
import dis4 from './dis4.jpg'
import dis5 from './dis5.jpg'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SimpleImageSlider from "react-simple-image-slider";


function Shop() {

  const [marginLeft, setMarginLeft] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { url: shoptop },
    { url: "./trend1.jpg"},
    { url: "./trend1.jpg"},
    { url: "./trend1.jpg" },
    { url: "./trend1.jpg" },
  ];



  const trendImages = [
    { image: trend1, title: "Women's Long Coat" },
    { image: trend2, title: "Men's Suit" },
    { image: trend3, title: "Gradient Shades" },
    { image: trend4, title: "Couple Rings" },
    { image: trend5, title: "Premium Wallet" },
    { image: trend6, title: "Combat Boots" },
    { image: trend7, title: "Jhumkas" },
    { image: trend8, title: "Leather Bracelets" },
    { image: trend2, title: "Men's Blazer" }
    // Add more trend objects as needed
  ];


  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % trendImages.length);
  };

  return (
    <>
      <div className="shop-container">
        <div>
          <SimpleImageSlider
            width={1519}
            height={390}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>

        <Box className="card-container" sx={{ width: 1480, marginTop: 5, boxShadow: 8, marginLeft: 'auto', marginBottom: 3, marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2>Shop By Category</h2>
          <div className="card-container">
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
                <CardActionArea component={Link} to="/products">
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
                <CardActionArea component={Link} to="/products">
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
                <CardActionArea component={Link} to="/products">
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
                <CardActionArea component={Link} to="/products">
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
          </div>
        </Box >

        <Box className="trending-slider-container" sx={{ width: 1480, marginTop: 5, boxShadow: 8, marginLeft: 'auto', marginBottom: 3, marginRight: 'auto', display: 'flex', overflowX: 'hidden', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Shop By Trending</h2>
          <IconButton className={'trending-slider-btn trending-slider-btn-left'} sx={{ backgroundColor: 'black', color: 'white', left: '-700px', top: '200px' }} onClick={handlePrevSlide}>
            <KeyboardArrowLeftIcon />
          </IconButton>

          <div className="trending-slider-container">
            {trendImages.slice(currentSlide, currentSlide + 5).map((trend, index) => (
              <Card
                key={index}
                className='animate_from_bottom'
                sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}
              >
                <CardActionArea component={Link} to="/products">
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

          <IconButton className={'trending-slider-btn trending-slider-btn-right'} sx={{ backgroundColor: 'black', color: 'white', right: '-710px', top: '-150px' }} onClick={handleNextSlide} disabled={marginLeft >= trendImages.length - 5}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>

        <Box className="discount-container" sx={{ width: 1480, marginTop: 5, boxShadow: 8, marginLeft: 'auto', marginBottom: 3, marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2>Products On Discount</h2>
          <div className="card-container">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
                <CardActionArea component={Link} to="/products">
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
                <CardActionArea component={Link} to="/products">
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
                <CardActionArea component={Link} to="/products">
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
                <CardActionArea component={Link} to="/products">
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
                <CardActionArea component={Link} to="/products">
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
          </div>
        </Box >
      </div >
      <Footer />
    </>
  )
}

export default Shop
