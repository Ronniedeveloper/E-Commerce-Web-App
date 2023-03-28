import React from "react";
import Navigation from "./Nav";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./Products";
import Footer from "./Footer";
import CardDetails from "./CardDetails";
import About from "./About";
import Contact from "./Contact"

function App() {
  return (
      <Router>
          <div className="App">
            <Navigation />
            <div className="Content row">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:id" element={<CardDetails />}></Route>
                <Route path="/about" element={<About /> }></Route>
                <Route path="/contact" element={ <Contact />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
      </Router>
  );
}

export default App;
