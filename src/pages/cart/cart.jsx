import React, { useState } from "react";
import { CartItem } from "./cartItem";

export const Cart = ({ cartItems, totalPrice, onTotalPrice, onRemoveQt }) => {
  return (
    <div>
      <h1>Your cart items</h1>

      <div className="cart-container">
        {cartItems.map((cartItem) => (
          <CartItem
            cartItem={cartItem}
            key={cartItem.id}
            onTotalPrice={onTotalPrice}
            onRemoveQt={onRemoveQt}
          />
        ))}
      </div>

      <h3>
        <b>Subtotal:</b> {totalPrice}
      </h3>
    </div>
  );
};
