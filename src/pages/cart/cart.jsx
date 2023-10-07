import React from "react";
import { CartItem } from "./cartItem";

export const Cart = () => {
  return (
    <div>
      <h1>Your cart items</h1>

      <div className="cart-container">
        <CartItem />
      </div>
    </div>
  );
};
