import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Cartpage from "./Cartpage";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            // Route for rendering the ProductDetail component based on the
            product ID from the URL
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cartpage />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
