import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import trend3 from './trend3.jpg'
import { Button } from '@mui/material';
import { Link } from "react-router-dom"

function Item() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '80px', marginTop: '40px' }}>
                    {/* First Clickable Image */}
                    <a href="#link1" onClick={() => handleImageClick('trend1')}>
                        <img
                            src={trend3}
                            alt="Clickable Image 1"
                            style={{
                                width: '150px',
                                height: '150px',
                                marginBottom: '10px',
                                border: selectedImage === 'trend1' ? '4px solid brown' : 'none',
                            }}
                        />
                    </a>

                    {/* Second Clickable Image */}
                    <a href="#link2" onClick={() => handleImageClick('trend2')}>
                        <img
                            src={trend3}
                            alt="Clickable Image 2"
                            style={{
                                width: '150px',
                                height: '150px',
                                marginBottom: '10px',
                                border: selectedImage === 'trend2' ? '4px solid brown' : 'none',
                            }}
                        />
                    </a>
                </div>

                <div style={{ marginTop: '40px', marginLeft: '110px' }}>
                    {/* Big Image on the Right */}
                    <img
                        src={trend3}
                        alt="Big Image"
                        style={{ width: '70%', maxHeight: '600px' }}
                    />
                </div>
                <div style={{ width: '25%', backgroundColor: '#f0f0f0', padding: '20px', alignContent: 'center', alignItems: 'center', height: '100%', overflowY: 'auto', marginRight: '30px', marginTop: '40px' }}>
                    {/* Product Name */}
                    <h2>Product Name</h2>

                    {/* Product Price */}
                    <h3>Price: 99.99 Rs</h3>

                    {/* Product MRP */}
                    <p style={{ textDecoration: 'line-through' }}>MRP: 129.99 Rs</p>

                    {/* Product Details */}
                    <h3>Product Details</h3>
                    <ul>
                        <li>Size: XL</li>
                        <li>Color: Blue</li>
                        <li>Material: Cotton</li>
                    </ul>

                    {/* Short Product Description */}
                    <p>Short product description goes here...</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
                        <Button
                            sx={{
                                backgroundColor: '#4d3d18',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#3b2e12',
                                },
                                padding: '10px 20px',
                                borderRadius: '5px',
                                width: '60%',
                                marginBottom: '10px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}
                        >
                            <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                                ADD TO CART
                            </Link>
                        </Button>

                        <Button
                            sx={{
                                backgroundColor: '#4d3d18',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#3b2e12',
                                },
                                padding: '10px 20px',
                                borderRadius: '5px',
                                width: '60%',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}
                        >
                            <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                                Buy Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Item;


