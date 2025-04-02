import React from "react";
import "../styles/Subscription.css";

function Subscription() {
  return (
    <div className="subscription">
      <h1>Subscription Plans</h1>
      <div className="plans">
        <div>📦 3 Months - ₹999</div>
        <div>📦 6 Months - ₹1799</div>
        <div>📦 Yearly - ₹2999</div>
      </div>
      <button>Subscribe Now</button>
    </div>
  );
}

export default Subscription;
