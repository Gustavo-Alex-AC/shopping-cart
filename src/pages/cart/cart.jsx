import React from "react";
import { CartItem } from "./cartItem";

export const Cart = ({ cartItems, setValue }) => {
  return (
    <div>
      <h1>Your cart items</h1>

      <div className="cart-container">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} setValue={setValue} />
        ))}
      </div>
    </div>
  );
};
