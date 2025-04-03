import React from "react";
import "../styles/Nutritionists.css"; // Import CSS

const nutritionists = [
  { id: 1, name: "Dr. Aryan Sharma", specialization: "Weight Management", image: "/images/n1.jpg" },
  { id: 2, name: "Dr. Riya Verma", specialization: "Diabetes & Heart Health", image: "/images/n2.jpg" },
  { id: 3, name: "Dr. Rahul Kapoor", specialization: "Sports Nutrition", image: "/images/n3.jpg" },
  { id: 4, name: "Dr. Sneha Mehta", specialization: "Child & Women Nutrition", image: "/images/n4.jpeg" },
  { id: 5, name: "Dr. Akash Singh", specialization: "Keto & Low-Carb Diets", image: "/images/n5.png" },
  { id: 6, name: "Dr. Priya Nair", specialization: "Vegan & Plant-Based Diets", image: "/images/n6.jpeg" },
  { id: 7, name: "Dr. Mohan Iyer", specialization: "Gut Health & Digestion", image: "/images/n7.jpeg" },
  { id: 8, name: "Dr. Kavita Das", specialization: "Senior Citizen Nutrition", image: "/images/n8.jpg" },
];

const Nutritionists = () => {
  return (
    <div className="nutritionists-container">
      <h1>Book a Nutritionist</h1>
      <div className="nutritionists-grid">
        {nutritionists.map((n) => (
          <div className="nutritionist-card" key={n.id}>
            <img src={n.image} alt={n.name} className="nutritionist-image" />
            <h3>{n.name}</h3>
            <p>{n.specialization}</p>
            <button>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutritionists;
