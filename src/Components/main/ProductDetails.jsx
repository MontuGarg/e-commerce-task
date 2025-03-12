import React from 'react';

function ProductDetails({ prodToggle, prod, setToggle }) {
  if (!prod) return null; // Ensure prod is not undefined

  return (
    prodToggle && (
      <div className="cart-div">
        <div className="cart-header">
          <h3>Product Details</h3>
          <p onClick={() => setToggle(false)}>✘</p>
        </div>

        <div className="product-content">
          {/* Display Image */}
          {prod.images && prod.images.length > 0 && (
            <img src={prod.images[0]} alt={prod.title}  />
          )}

          <br/>
          <span>${prod.price}</span>
          <h4>{prod.title}</h4>
          <p>{prod.description || "No description available"}</p>
        </div>
      </div>
    )
  );
}

export default ProductDetails;
