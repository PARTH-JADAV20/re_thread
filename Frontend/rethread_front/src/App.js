import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Sell from './Sell';
import Shop from './Shop';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} index />   
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>No Route Found Here</p>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;





