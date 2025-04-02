import React, { useState } from "react";
import "../styles/Search.css";

const alternatives = {
  "Burger": "Grilled Veggie Burger",
  "Pizza": "Whole Wheat Veggie Pizza",
  "Fries": "Baked Sweet Potato Fries",
};

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const searchFood = () => {
    setResult(alternatives[query] || "No healthy alternative found");
  };

  return (
    <div className="search">
      <h1>Find Healthy Alternatives</h1>
      <input
        type="text"
        placeholder="Enter food name..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchFood}>Search</button>
      <p>{result}</p>
    </div>
  );
}

export default Search;
