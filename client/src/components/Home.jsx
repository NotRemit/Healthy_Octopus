import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-layout">
      
      {/* Main Content */}
      <div className="container">
        <div className="header">
          <div className="logo-section">
            HEALTHY HUB
          </div>
          <div className="links">
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/nutritionists">Nutritionists</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/subscription" className="subscribe">SUBSCRIBE</Link></li>
          </div>
        </div>
        <div className="content">
        <div className="banner-area">

        </div>
        
        <div className="recomendation">
          <div className="recomendation-headline">Top Healthy Foods</div>
            <div className="food-list">
              <img src="/healthy-food.png" alt="Healthy Food" className="food-image" />
            </div>
          </div>

          <div className="details">
              <h3>Health Certifications</h3>
              <p>✅ FSSAI Certified</p>
              <p>✅ Organic Ingredients</p>
          </div>
        </div>
        <div className="footer">
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </div>
      </div>
    </div>
  );
}

export default Home;
