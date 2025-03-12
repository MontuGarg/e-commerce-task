import React from "react";

function MyAccount({ user, orders }) {
  return (
    <div className="account-container">
      <h2>My Account</h2>

      {/* User Details */}
      <div className="account-details">
        <h3>Profile Information</h3>
        <p><strong>Name:</strong> {user?.name || "Guest"}</p>
        <p><strong>Email:</strong> {user?.email || "Not Provided"}</p>
      </div>

      {/* Order History */}
      <div className="order-history">
        <h3>Order History</h3>
        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                <strong>Date:</strong> {order.date} <br />
                <strong>Items:</strong> {order.items.map(item => item.title).join(", ")}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logout Button (if needed) */}
    </div>
  );
}

export default MyAccount;
