import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import trend5 from './trend5.webp'
import trend6 from './trend6.webp'
import { Card, CardContent, CardMedia } from '@mui/material'

function Cart() {
  const cart = [
    { image: trend5, title: "Premium Wallet" , price:150},
    { image: trend6, title: "Combat Boots", price:300 },
  ]
  return (
    <>
    <div>
      <Card>
        <CardMedia>
          <CardContent>
            
          </CardContent>
        </CardMedia>
      </Card>
    </div>
    <Footer/>
    </>
  )
}

export default Cart
