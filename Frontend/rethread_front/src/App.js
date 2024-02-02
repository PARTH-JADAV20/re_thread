import Home from './Home';
import About from './About';
import Contact from './Contact';
import Sell from './Sell';
import Shop from './Shop';
import Products from './Products';
import Signup from './Signup';
import Login from './Login';
import SellingForm from './SellingForm';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageNotFound from './PageNotFound';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} index />   
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/selling-form" element={<SellingForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;





