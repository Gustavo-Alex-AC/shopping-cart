import "./shop.css";

export const ShopItem = ({ item, onCartItem, setTotalPrice }) => {
  function handleAddToCart() {
    onCartItem(item);
    setTotalPrice((pt) => (pt += item.price));
  }

  return (
    <div className="shopItem">
      <img className="image" src={item.image} alt={item.name} />

      <div className="details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button className="button" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
