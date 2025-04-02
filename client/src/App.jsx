import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Subscription from "./components/Subscription";
import Nutritionists from "./components/Nutritionists";  // Ensure correct file case
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/nutritionists">Nutritionists</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact Us</Link>  {/* Fixed this */}
          <Link to="/feedback">Feedback</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/nutritionists" element={<Nutritionists />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />  {/* Fixed this */}
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
