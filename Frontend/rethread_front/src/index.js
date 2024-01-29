import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './Navbar';
import { NavLink } from "react-router-dom";
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import all_products from './all_products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <NavLink
    to="/all-products"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    ALL PRODUCTS
  </NavLink>;
    <Routes>
      <Route path = "/home" element={<App/>}/>
      <Route path = "/page" element={<p>Page</p>}/>
      <Route path = "/blog" element={<p>Blog</p>}/>
      
      
      <Route path = "/*" element={<p>No Route Found Here</p>}/>
    </Routes>
    <Footer />
  </BrowserRouter>

);
