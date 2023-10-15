import React, { createContext } from "react";
import { shopItem } from "../App";
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 0; i < shopItem.length + 1; i++) {
    cart[i] = 0;

    return cart;
  }
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function AddToCart(id) {
    setCartItems((cartItem) => ({ ...cartItem, [id]: cartItem[id] + 1 }));
  }

  function removeFromCart(id) {
    setCartItems((cartItem) => ({ ...cartItem, [id]: cartItem[id] - 1 }));
  }

  const contextValue = { cartItems, AddToCart, removeFromCart };

  return <ShopContext.Provider>{children}</ShopContext.Provider>;
};
