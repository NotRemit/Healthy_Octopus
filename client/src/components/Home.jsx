import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Chatbot.css";

function Home() {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setShowChat(!showChat);

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
  
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              role: "user",
              parts: [
                {
                  "text": "You are a knowledgeable and friendly AI nutrition assistant dedicated to providing users with accurate, science-backed advice on healthy eating, meal planning, and nutrition. Your responses should be clear, engaging, and practical, focusing on balanced diets, nutritional benefits, and sustainable eating habits. Avoid giving medical diagnoses or treatment recommendations, and instead, encourage users to consult healthcare professionals for medical concerns. Maintain a positive and supportive tone, promoting healthy lifestyle choices that are achievable and beneficial for long-term well-being."
                }
              ]
            },{ role: "user", parts: [{ text: input }] }]
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const botMessage = {
        text: data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.",
        sender: "bot",
      };
  
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };
  

  return (
    <div className="home-layout">
      {/* Main Content */}
      <div className="container">
        <div className="header">
          <div className="logo-section">HEALTHY HUB</div>
          <div className="links">
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/nutritionists">Nutritionists</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/subscription" className="subscribe">SUBSCRIBE</Link></li>
          </div>
        </div>

        <div className="content">
          <div className="banner-area"></div>

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

      {/* Floating Chatbot Button */}
      <div className="chatbot-button" onClick={toggleChat}>💬</div>

      {/* Chatbot Popup */}
      {showChat && (
        <div className="chatbot-popup">
          <div className="chat-header">
            <span>Chat with Healthy Bot</span>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type a message..." 
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
