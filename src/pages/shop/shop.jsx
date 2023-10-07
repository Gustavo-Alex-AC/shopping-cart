import React from "react";
import { ShopItem } from "./shopItem";
import "./shop.css";

export const Shop = ({ items }) => {
  return (
    <div>
      <h1>Gustex tech shop</h1>

      <div className="shop-container">
        {items.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
