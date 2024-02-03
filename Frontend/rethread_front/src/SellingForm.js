import React from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Textarea from '@mui/joy/Textarea';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import tshirt from './tshirt.png'
import gliterback from "./gliterback.jpg"
import Footer from './Footer';


function SellingForm() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${gliterback})`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        paddingTop: '1px',  // Adjust the top padding to create space at the top
      }}>
        <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Product Selling Form</h1>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 960,
          backgroundColor: 'white',
          marginTop: 5,  // Adjust the margin-top to move the box down
          boxShadow: 8,
          marginLeft: 'auto',
          marginRight: 'auto',
          
        }}>
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={product_type}
              sx={{ width: 300, marginTop: 3 }}
              renderInput={(params) => <TextField {...params} label="Product" />}
            />
            <Textarea name="Outlined" placeholder="Desciption of Product" variant="outlined" minRows={3} sx={{ width: 300, marginTop: 2 }} />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={material}
              sx={{ width: 300, marginTop: 2 }}
              renderInput={(params) => <TextField {...params} label="Material" />}
            />

            <TextField id="outlined-basic" label="Brand" variant="outlined" sx={{ width: 300, marginTop: 2 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={material}
                sx={{ width: '48%', marginTop: 2 }} // Adjusted width for Size
                renderInput={(params) => <TextField {...params} label="Size" />}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={material}
                sx={{ width: '48%', marginTop: 2 }} // Adjusted width for Color
                renderInput={(params) => <TextField {...params} label="Color" />}
              />
            </div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={material}
              sx={{ width: 300, marginTop: 2 }}
              renderInput={(params) => <TextField {...params} label="Condition" />}
            />

            <Textarea name="Outlined" placeholder="Reason for Re-Selling" variant="outlined" minRows={3} sx={{ width: 300, marginTop: 2, marginBottom: 3 }} />
          </div>
          <div div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 5 }}>
                <Box sx={{ width: '48%', height: 120, marginTop: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input type="file" id="image1" name="image1" accept="image/*" style={{ marginTop: 15, marginLeft: 15 }} />
                  <img src={tshirt} alt="Camera Icon" style={{ width: 70, height: 70, marginTop: 5 }} />
                </Box>
                <Box sx={{ width: '48%', height: 120, marginTop: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input type="file" id="image2" name="image2" accept="image/*" style={{ marginTop: 15, marginLeft: 15 }} />
                  <img src={tshirt} alt="Camera Icon" style={{ width: 70, height: 70, marginTop: 5 }} />
                </Box>
              </div>
            </div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={material}
              sx={{ width: 300, marginTop: 2 }}
              renderInput={(params) => <TextField {...params} label="Shipping Method" />}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField id="outlined-basic" label="MRP" variant="outlined" sx={{ width: '48%', marginTop: 2 }} />
              <TextField id="outlined-basic" label="Reselling Price" variant="outlined" sx={{ width: '48%', marginTop: 2 }} />
            </div>

            <Box sx={{ width: '100%', marginTop: 2, padding: 2, border: '1px solid #ccc', borderRadius: 5 }}>
              <Typography variant="h6" gutterBottom>
                Price Breakdown
              </Typography>
              <div style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    Buyer Pays (Rs)
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    You Get (Rs)
                  </Typography>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontSize: 30 }}>
                    0
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontSize: 30 }}>
                    0
                  </Typography>
                </div>
              </div>
              <div style={{ display: 'flex', alignContent: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    Resale Price
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                    Resale Price - ReThread Commission
                  </Typography>
                </div>
              </div>
            </Box>
          </div>
        </Box>

        <Button sx={{
          backgroundColor: '#4d3d18',
          color: 'white',
          '&:hover': {
            backgroundColor: '#3b2e12',
          },
          padding: '10px 20px',
          borderRadius: '5px',
          marginTop: '10px',
          marginBottom: '3px',
          fontSize: '16px',
          fontWeight: 'bold',
          alignItems: 'center',
          width: '25%',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}>
          Submit Form
        </Button>
      </div >
      <Footer />
    </>
  )
}
const product_type = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }];

const material = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }];
export default SellingForm
