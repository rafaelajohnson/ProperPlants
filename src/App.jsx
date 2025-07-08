import { useState } from 'react';
import PlantList from './components/Plants/PlantList';
import CartList  from './components/Cart/CartList';
import plants    from './data';

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart(curr => {
      const exists = curr.find(item => item.id === plant.id);
      if (exists) {
        return curr.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...curr, { ...plant, quantity: 1 }];
      }
    });
  }

  function incrementQuantity(id) {
    setCart(curr =>
      curr.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id) {
    setCart(curr =>
      curr
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  return (
    <div>
      <h1>Proper Plants</h1>
      <PlantList addToCart={addToCart} />
      <CartList
        cart={cart}
        increment={incrementQuantity}
        decrement={decrementQuantity}
      />
    </div>
  );
}