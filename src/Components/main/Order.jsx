import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Order({order}) {
    let navigate=useNavigate();
  return (
    <div className='order-div'>
      <div className='order-back'><span onClick={()=>navigate("/myOrders")}>←</span><h3>My Order</h3></div>
      
     {order.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.images[0]} alt={product.title} width="50" />
          <div>
              <span className="cart-title">{product.title}</span><br/>
              <span className="cart-price">{product.price * product.quantity}$</span>
              <div className="cart-quantity">
               Quantity: <span>{product.quantity}</span>
              </div>
          </div>
        </div>
      ))} 
    </div>
  )
}
