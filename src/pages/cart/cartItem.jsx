import React, { useState } from "react";
import "./cart.css";

export const CartItem = ({ cartItem, setValue }) => {
  const [quantity, setQuantity] = useState(1);
  //   const [value, setValue] = useState(1);

  function handleMinus() {
    if (quantity > 1) setQuantity((s) => (s -= 1));
  }

  function handlePlus() {
    setQuantity((s) => (s += 1));
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
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="cart-button" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
};
