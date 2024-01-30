import React from 'react'
import Navbar from './Navbar'
import gliterback from "./gliterback.jpg"

function Login() {
  return (
    <div style={{
      backgroundImage:`url(${gliterback})`,
      backgroundSize: 'cover', // ensures the image covers the entire div
      height: '100vh', // sets the height to 100% of the viewport height
      width: '100vw' // sets the width to 100% of the viewport width
    }}>
      <Navbar/>
    </div>
  )
}

export default Login
