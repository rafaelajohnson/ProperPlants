import React from 'react';
import plants from '../../data';
import PlantCard from './PlantCard';

export default function PlantList({ addToCart }) {
  return (
    <div className="plant-list">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}