import React, { useState } from "react";
import "../styles/Search.css";
import { FaShoppingCart } from "react-icons/fa"; // Importing cart icon

const alternatives = {
  Burger: {
    options: [
      { name: "Grilled Veggie Burger", image: "\grilled_veggy_burger.webp" },
      { name: "Lettuce-Wrapped Chicken Burger", image: "\keto_lettuce_wrap_burger.jpg" },
      { name: "Portobello Mushroom Burger", image: "\portabello_mushroom_burger.jpg" },
    ],
    description: "These alternatives reduce unhealthy fats while increasing fiber and plant-based nutrients.",
  },
  Pizza: {
    options: [
      { name: "Whole Wheat Veggie Pizza", image: "/images/veggie-pizza.jpg" },
      { name: "Cauliflower Crust Pizza", image: "/images/cauliflower-pizza.jpg" },
      { name: "Zucchini Crust Pizza", image: "/images/zucchini-pizza.jpg" },
    ],
    description: "Made with whole grains or vegetables, these alternatives are lower in refined carbs.",
  },
};

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [cart, setCart] = useState([]);

  const searchFood = () => {
    const formattedQuery = query.trim().toLowerCase();
    const foundAlternative = Object.keys(alternatives).find(
      (food) => food.toLowerCase() === formattedQuery
    );

    if (foundAlternative) {
      setResult(alternatives[foundAlternative]);
    } else {
      setResult({ options: [] });
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="search-container">
      <h1>Find Healthy Alternatives</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter food name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchFood}>Search</button>
      </div>

      {result && (
        <div className="food-result">
          <h2>Healthy Alternatives:</h2>
          <p className="food-description">{result.description}</p>
          <div className="alternative-list">
            {result.options.length > 0 ? (
              result.options.map((alt, index) => (
                <div className="alternative-item" key={index}>
                  <img src={alt.image} alt={alt.name} className="food-image" />
                  <div className="alternative-info">
                    <p>{alt.name}</p>
                    <button className="cart-btn" onClick={() => addToCart(alt)}>
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No healthy alternative found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
