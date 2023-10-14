import React, { useState } from "react";
import "./shop.css";

export const ShopItem = ({ item, onCartItem, onQuantity }) => {
  function handleAddToCart() {
    // cartItems.map((cartItem) => onCartItem({ cartItem.id !== item.id ? ...item, quanty: onQuantity })
    // );
    onCartItem({ ...item, quanty: onQuantity });
  }

  return (
    <div className="shopItem">
      <img className="image" src={item.image} alt={item.name} />

      <div className="details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button className="button" onClick={handleAddToCart}>
          {onQuantity >= 1 ? `Add To Cart(${onQuantity})` : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};
