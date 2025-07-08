import React from 'react';

export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <span className="plant-image" aria-label={plant.name}>
        {plant.image}
      </span>
      <h2 className="plant-name">{plant.name}</h2>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}