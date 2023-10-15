import { useEffect, useState } from "react";
import "./cart.css";

export const CartItem = ({ cartItem, onTotalPrice, onRemoveQt }) => {
  const [quantity, setQuantity] = useState(1);

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((s) => (s -= 1));

      onRemoveQt(cartItem, quantity);
    }
  }

  function handlePlus() {
    setQuantity((s) => (s += 1));
    onTotalPrice(cartItem, quantity);
  }

  return (
    <div className="cartItem">
      <img className="cart-image" src={cartItem.image} alt={cartItem.name} />

      <div className="cart-details">
        <h3>{cartItem.name}</h3>
        <p>
          <strong>Price:</strong> ${cartItem.price}
        </p>
        <button className="cart-button" onClick={handleMinus}>
          -
        </button>
        <input
          className="cart-input"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button className="cart-button" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
};
