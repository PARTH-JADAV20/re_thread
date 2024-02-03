import Home from './Home';
import About from './About';
import Contact from './Contact';
import Sell from './Sell';
import Shop from './Shop';
import Products from './Products';
import Signup from './Signup';
import Login from './Login';
import Item from './Item';
import SellingForm from './SellingForm';
import Cart from './Cart'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageNotFound from './PageNotFound';
import Navbar from './Navbar';

function App() {
  return (

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} index />   
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/selling-form" element={<SellingForm />} />
          <Route path="/item" element={<Item />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;





