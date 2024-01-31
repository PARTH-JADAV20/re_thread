import React from 'react';
import Navbar from './Navbar';
import maintop from "./maintop.png";
import perople from "./p1.png"

function About() {
  return (
    <div>
      <Navbar />
      <img src={maintop} alt="Description of Image" style={{ width: '100%', height: '310px' }} />
      <h1 style={{
        position: 'absolute',
        top: '21%',
        left: '43%',
        color: "white",
        fontSize: 60,
        fontWeight: 'bolder',
        fontFamily: 'Roboto'
      }}>
        About Us
      </h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={perople} alt="Description of Image" style={{ width: '50%' }} />
        <div style={{ marginLeft: '25px', marginRight:15 }}>
          <h2>Welcome to our platform</h2>
          <p>
            A place where we firmly believe in the power of second chances! Our mission is to create a sustainable fashion ecosystem that benefits everyone involved.<br /><br />

            Our platform serves as a bridge between individuals who are looking to de-clutter their wardrobes and those who are in search of affordable clothing options. We understand that affordability should not compromise quality. Therefore, we have a stringent verification process in place. Each item listed on our platform undergoes this process to ensure it meets our high-quality standards.<br /><br />

            But our platform is more than just a marketplace. It’s a community of fashion-conscious individuals who understand the value of each garment and believe in extending its lifecycle. By choosing to purchase pre-loved items, our customers contribute to reducing fashion waste and promoting sustainability.<br /><br />

            So, join us in our journey to transform wardrobes across the world. Together, we can make a difference. Together, we can give fashion a second chance.
          </p>
        </div>
      </div>

    </div>
  );
}


export default About
