import React from "react";
import "./cart.css";

export const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <img className="image" src={item.image} alt={item.name} />

      <div className="details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button className="button">Add To Cart</button>
      </div>
    </div>
  );
};
