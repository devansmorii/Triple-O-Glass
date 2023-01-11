import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Products from "./pages/products/products";
import Glass from "./pages/glass/Glass";
import Aluminum from "./pages/aluminum/Aluminum";
import Quote from "./pages/quote/Quote";
import Angle from "./pages/aluminum/aluminum_materials/angle/angle"
import RoundTubes from "./pages/aluminum/aluminum_materials/round-tubes/roundtubes"
import ShowerEnclosure from './pages/aluminum/aluminum_materials/shower-enclosure/showerenclosure';
import SlidingDoor from './pages/aluminum/aluminum_materials/sliding-door/slidingdoor';
import Storefront from './pages/aluminum/aluminum_materials/store-front/storefront';
import SwingDoor from './pages/aluminum/aluminum_materials/swing-door/swingdoor';
import SwingScreenDoor from './pages/aluminum/aluminum_materials/swing-screen-door/swingscreendoor';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <CartProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Glass" element={<Glass />} />
        <Route path="/Aluminum" element={<Aluminum />} />
        <Route path="/angle" element={<Angle />} />
        <Route path="/roundtubes" element={<RoundTubes />} />
        <Route path="/showerenclosure" element={<ShowerEnclosure />} />
        <Route path="/slidingdoor" element={<SlidingDoor />} />
        <Route path="/storefront" element={<Storefront />} />
        <Route path="/swingdoor" element={<SwingDoor />} />
        <Route path="/swingscreendoor" element={<SwingScreenDoor />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
    


    </>
  );
}

export default App;
