import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, cartToggle, setCartToggle, setOrder, setOrders }) {
  let navigate = useNavigate();

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total price dynamically
  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Get today's date in dd-mm-yyyy format
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;

    // Create an order with date field
    const newOrder = {
      items: cart,
      date: formattedDate,
      total: totalPrice // Adding date field
    };

    setOrder(cart);
    setOrders((prevOrders) => [...prevOrders, newOrder]); // Store order with date
    setCart([]);
    setCartToggle(false);

    navigate("/order"); // Navigate to home page after checkout
  };
  return (
    cartToggle && (
      <div className="cart-div">
        <div className="cart-header">
          <h3>My Orders</h3>
          <p onClick={() => setCartToggle(false)}>✘</p>
        </div>
        <div className="cart-main">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.images[0]} alt={product.title} width="50" />
                <div>
                  <span className="cart-title">{product.title}</span><br/>
                  <span className="cart-price">{product.price * product.quantity}$</span>
                  <div className="cart-quantity">
                    <button id="decrement" onClick={() => decrementQuantity(product.id)}>-</button>
                    <span>{product.quantity}</span>
                    <button id="increment" onClick={() => incrementQuantity(product.id)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-checkout">
          <div className="cart-header">
            <h3>Total:</h3>
            <p>{totalPrice}$</p>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    )
  );
}

export default Cart;
