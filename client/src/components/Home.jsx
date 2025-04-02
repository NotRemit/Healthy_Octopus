import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Healthy Food Alternatives</h1>
      <input type="text" placeholder="Search healthy food..." />
      <button>Search</button>
      
      <h2>Top Healthy Foods</h2>
      <div className="food-list">
        <p>🥗 Quinoa Salad</p>
        <p>🍲 Grilled Salmon</p>
        <p>🍎 Fresh Fruit Bowl</p>
      </div>

      <h3>Health Certifications</h3>
      <p>✅ FSSAI Certified</p>
      <p>✅ Organic Ingredients</p>

      <Link to="/subscription">
        <button>Choose a Better Plan</button>
      </Link>

      <Link to="/nutritionists">
        <button>Ask a Nutritionist</button>
      </Link>

      <div className="links">
        <Link to="/contact">Contact Us</Link>
        <Link to="/feedback">Submit Feedback</Link>
      </div>
    </div>
  );
}

export default Home;
