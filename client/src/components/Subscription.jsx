import React, { useState } from 'react';
import '../styles/Subscription.css';

const plans = [
  { name: 'Basic (3 months)', price: '₹3999/-', hd: true, ultraHd: false, screens: false },
  { name: 'Standard (6 months)', price: '₹6999/-', hd: true, ultraHd: true, screens: false },
  { name: 'Premium (12 months)', price: '₹11999/-', hd: true, ultraHd: true, screens: true }
];

function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState('Premium');

  return (
    <div className="subscription-container">
      <h1>Choose the plan that's right for you</h1>
      <p>Downgrade or upgrade at any time</p>
      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan ${selectedPlan === plan.name ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
          </div>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Features</th>
            {plans.map((plan) => (
              <th key={plan.name}>{plan.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weekly Diet Plans</td>
            {plans.map((plan) => (
              <td key={plan.name}>{plan.hd ? '✔' : '✖'}</td>
            ))}
          </tr>
          <tr>
            <td>Personalized Menu as per Goals</td>
            {plans.map((plan) => (
              <td key={plan.name}>{plan.ultraHd ? '✔' : '✖'}</td>
            ))}
          </tr>
          <tr>
            <td>One on One conversation with Top Nutritionists</td>
            {plans.map((plan) => (
               <td key={plan.name}>{plan.screens ? '✔' : '✖'}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Subscription;
