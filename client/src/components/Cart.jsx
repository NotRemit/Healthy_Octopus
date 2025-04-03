import React from "react";
import "../styles/Cart.css"; // Link to the CSS file

const Cart = () => {
  // Sample cart items (hardcoded for demonstration)
  const cartItems = [
    { id: 1, name: "Grilled Veggie Burger", price: 250 },
    { id: 2, name: "Lettuce-Wrapped Chicken Burger", price: 200 },
    { id: 3, name: "Portobello Mushroom Burger", price: 180 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <h3 className="cart-total">Total: ₹{totalPrice}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
