import React from "react";
import "./shop.css";

export const ShopItem = ({ item }) => {
  return (
    <div className="shopItem">
      <img className="image" src={item.image} alt={item.name} />

      <div className="details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button className="button">Add To Cart</button>
      </div>
    </div>
  );
};
