import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import shoptop from './shoptop.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Link } from '@mui/material';
import women from './women.jpg'
import men from './men.avif'
import kids from './kids.jpg'
import footwear from './footwear.avif'
import accessories from './accessories.webp'
function Shop() {
  return (
    <>
      <div>
        <Navbar />
        <img src={shoptop} alt="Description of Image" style={{ width: '100%', height: '310px' }} />
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
          marginBottom:3,
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Shop By Category</h2>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} href="https://www.instagram.com/_deepanshidey03_" target="_blank">
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
              <CardActionArea component={Link} href="https://www.linkedin.com/in/deepanshidey03/" target="_blank">
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
              <CardActionArea component={Link} href="https://github.com/Deepanshi03" target="_blank">
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
              <CardActionArea component={Link} href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshidey03@gmail.com" target="_blank">
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

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshidey03@gmail.com" target="_blank">
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
          marginBottom:3,
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Shop By Category</h2>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} href="https://www.instagram.com/_deepanshidey03_" target="_blank">
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
              <CardActionArea component={Link} href="https://www.linkedin.com/in/deepanshidey03/" target="_blank">
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
              <CardActionArea component={Link} href="https://github.com/Deepanshi03" target="_blank">
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
              <CardActionArea component={Link} href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshidey03@gmail.com" target="_blank">
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

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshidey03@gmail.com" target="_blank">
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
          marginBottom:3,
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Shop By Category</h2>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} href="https://www.instagram.com/_deepanshidey03_" target="_blank">
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
              <CardActionArea component={Link} href="https://www.linkedin.com/in/deepanshidey03/" target="_blank">
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
              <CardActionArea component={Link} href="https://github.com/Deepanshi03" target="_blank">
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
              <CardActionArea component={Link} href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshidey03@gmail.com" target="_blank">
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

            <Card className='animate_from_bottom' sx={{ width: 270, marginTop: 3, marginLeft: 3, marginRight: 3, marginBottom: 3, boxShadow: 5 }}>
              <CardActionArea component={Link} href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshidey03@gmail.com" target="_blank">
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
      </div >
      <Footer />
    </>
  )
}

export default Shop
