import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import mainback from "./mainback.avif";
function Home() {
  return (
    <div style={{
        backgroundImage:`url(${mainback})`,
        backgroundSize: 'cover', // ensures the image covers the entire div
        height: '100vh', // sets the height to 100% of the viewport height
        width: '100vw' // sets the width to 100% of the viewport width
      }}>
  
        <Navbar/>
        <div>
          <h1 className='heading'>ReThread</h1>
          <h2 className='tagline'>Fashion Re-Imagined, Affordability Redefined</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
