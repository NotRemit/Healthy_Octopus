import React, { useState } from "react";
import "../styles/Feedback.css";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
  };

  return (
    <div className="feedback">
      <h1>Submit Your Feedback</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
        />
        <textarea
          placeholder="Your Feedback"
          rows="4"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        <label>Rate Us:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
