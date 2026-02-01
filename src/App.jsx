import { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1>Paradise Nursery</h1>
        <button onClick={() => setShowCart(false)}>Plants</button>
        <button onClick={() => setShowCart(true)}>Cart</button>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
