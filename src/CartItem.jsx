import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.cost.substring(1));
      return total + price * item.quantity;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      amount: item.quantity + 1,
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        name: item.name,
        amount: item.quantity - 1,
      }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.map((item, index) => (
        <div className="cart-card" key={index}>
          <h3>{item.name}</h3>
          <p>Price: {item.cost}</p>
          <p>
            Subtotal: $
            {parseFloat(item.cost.substring(1)) * item.quantity}
          </p>

          <button onClick={() => handleIncrement(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleDecrement(item)}>-</button>

          <button onClick={() => handleRemove(item.name)}>Delete</button>
        </div>
      ))}

      <h3>Total: ${calculateTotalAmount()}</h3>

      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
}

export default CartItem;
