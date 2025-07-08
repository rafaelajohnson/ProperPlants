import React from 'react';
import CartItem from './CartItem';

export default function CartList({ cart, increment, decrement }) {
  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-list">
      <h2>Cart</h2>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </div>
  );
}