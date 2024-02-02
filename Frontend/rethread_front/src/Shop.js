import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import shoptop from './shoptop.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import {Link } from "react-router-dom";
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

function Shop() {
  return (
    <>
      <div>
        <Navbar />
        <img src={shoptop}  style={{ width: '100%', height: '310px' }} />
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Shop By Trending</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Women's Long Coat
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Men's Suit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gradient Shades
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Couple Rings
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend5}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Premium Wallet
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend6}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Combat Boots
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend7}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Jhumkas
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} to="/products" target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={trend8}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    leather Bracelets
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
