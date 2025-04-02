import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/SearchPage";
import Subscription from "./components/Subscription";
import Nutritionists from "./components/Nutritionists";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/nutritionists" element={<Nutritionists />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;