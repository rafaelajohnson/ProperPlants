import React from 'react';

export default function CartItem({ item, increment, decrement }) {
  return (
    <div className="cart-item">
      <span className="plant-image" aria-label={item.name}>
        {item.image}
      </span>
      <span className="plant-name">{item.name}</span>
      <div className="quantity-controls">
        <button onClick={() => decrement(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increment(item.id)}>+</button>
      </div>
    </div>
  );
}