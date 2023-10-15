import React, { useState } from "react";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";

export const Cart = ({
  cartItems,
  totalPrice,
  onTotalPrice,
  onRemoveQt,
  removeCartItem,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <h1>Your cart items</h1>
      )}

      <div className="cart-container">
        {cartItems.map((cartItem) => (
          <CartItem
            cartItem={cartItem}
            key={cartItem.id}
            onTotalPrice={onTotalPrice}
            onRemoveQt={onRemoveQt}
            removeCartItem={removeCartItem}
          />
        ))}
      </div>

      {cartItems.length === 0 ? (
        ""
      ) : (
        <>
          <div className="cart-footer">
            <h3>
              <b>Subtotal:</b> {totalPrice}
            </h3>

            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};
