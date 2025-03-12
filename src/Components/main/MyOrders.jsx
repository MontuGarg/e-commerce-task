import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MyOrders({orders,setOrder}) {
    let navigate=useNavigate();
  return (
    <div className='Myorder-div' >
      <div className='Myorder-back'><h3>My Orders</h3></div>
      
     {orders.length>0?(orders.map((product) => (
        <div key={product.id} className="cart-item" onClick={()=>{setOrder(product.items); navigate("/order");}}>
          <div>
              <span className="cart-title">📅{product.date}</span><br/>
              <span className="cart-price">🛒{product.items.length}</span>
          </div>
          <div>
              <span className='total-price'>${product.total}</span>
              <span onClick={()=>{setOrder(product.items); navigate("/order");}}>→</span>
          </div>
        </div>
      ))):<>No orders placed yet.</>} 
    </div>
  )
}
