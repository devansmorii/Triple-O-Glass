import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Products from "./pages/products/products"
import Glass from "./pages/glass/Glass"
import Quote from "./pages/quote/Quote"
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
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
    


    </>
  );
}

export default App;
