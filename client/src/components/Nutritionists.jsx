import React from "react";
import "../styles/Nutritionists.css";

const nutritionists = [
  { name: "Dr. Aryan Sharma", specialization: "Weight Management" },
  { name: "Dr. Riya Verma", specialization: "Diabetes & Heart Health" },
  { name: "Dr. Rahul Kapoor", specialization: "Sports Nutrition" },
  { name: "Dr. Sneha Mehta", specialization: "Child & Women Nutrition" },
  { name: "Dr. Akash Singh", specialization: "Keto & Low-Carb Diets" },
];

function Nutritionists() {
  return (
    <div className="nutritionists">
      <h1>Book a Nutritionist</h1>
      <div className="nutritionist-list">
        {nutritionists.map((n, index) => (
          <div className="nutritionist-card" key={index}>
            <h3>{n.name}</h3>
            <p>{n.specialization}</p>
            <button>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nutritionists;
