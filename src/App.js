import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop.jsx";
import { Cart } from "./pages/cart/cart";
import { useState } from "react";
import shopItems from "./data.js";

export default function App() {
  const [items, setItems] = useState(shopItems);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleAddToCart(item) {
    if (cartItems.indexOf(item) !== -1) return;
    setCartItems((cartItems) => [...cartItems, item]);
    console.log(cartItems.indexOf(item));
  }

  function handleRemoveFromCart(item, quantity) {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    setTotalPrice((tp) => (tp -= item.price * quantity));
  }

  function handleTotalPrice(item, quantity, s) {
    let ind = -1;

    cartItems.forEach((cart, i) => {
      if (cart.id === item.id) {
        ind = i;
      }
    });

    const tempArr = cartItems;
    setTotalPrice((tp) => (tp += tempArr[ind].price));
  }

  function handleReduceQuantity(item, quantity) {
    let ind = -1;

    cartItems.forEach((cart, i) => {
      if (cart.id === item.id) {
        ind = i;
      }
    });

    const tempArr = cartItems;
    setTotalPrice((tp) => (tp -= tempArr[ind].price));
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Shop
                items={items}
                onCartItem={handleAddToCart}
                setTotalPrice={setTotalPrice}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                totalPrice={totalPrice}
                onTotalPrice={handleTotalPrice}
                onRemoveQt={handleReduceQuantity}
                removeCartItem={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
