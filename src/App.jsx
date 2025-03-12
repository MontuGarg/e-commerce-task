import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Layout/Navbar'
import Home from './Components/main/Home'
import Clothes from './Components/main/Clothes'
import Electronics from './Components/main/Electronics'
import Furniture from './Components/main/Furnitures'
import Toys from './Components/main/Toys'
import { useState } from 'react'
import Cart from './Components/main/Cart'
import Order from './Components/main/Order'
import MyOrders from './Components/main/MyOrders'
import MyAccount from './Components/main/Myaccount'
import ProductDetails from './Components/main/ProductDetails'

function App() {
    let [cart,setCart]=useState([]);
    let [cartToggle, setCartToggle]=useState(false);
    let [order, setOrder]=useState([]);
    let [orders,setOrders]=useState([]);
    let [prod,setProd]=useState({});
    let [prodToggle,setToggle]=useState(false);
  return (
    <>
      <Navbar setCartToggle={setCartToggle} cart={cart}/>
      <Cart setCartToggle={setCartToggle} cartToggle={cartToggle} cart={cart} setCart={setCart} setOrders={setOrders} setOrder={setOrder}/>
      <ProductDetails prodToggle={prodToggle} prod={prod} setToggle={setToggle}/>
        <Routes>
          <Route path="/" element={<Home setCart={setCart} cart={cart} setCartToggle={setCartToggle} setProd={setProd} setToggle={setToggle}/> }/>
          <Route path="/clothes" element={<Clothes setCart={setCart} cart={cart} setCartToggle={setCartToggle} setProd={setProd} setToggle={setToggle}/>}/>
          <Route path="/electronics" element={<Electronics setCart={setCart} cart={cart} setCartToggle={setCartToggle} setProd={setProd} setToggle={setToggle}/>}/>
          <Route path="/furniture" element={<Furniture setCart={setCart} cart={cart} setCartToggle={setCartToggle} setProd={setProd} setToggle={setToggle}/>}/>
          <Route path="/toys" element={<Toys setCart={setCart} cart={cart} setCartToggle={setCartToggle} setProd={setProd} setToggle={setToggle}/>}/>
          <Route path="/order" element={<Order order={order}/>}/>
          <Route path="/myOrders" element={<MyOrders orders={orders} setOrder={setOrder}/>}/>
          <Route path="/account" element={<MyAccount orders={orders} />}/>
          
        </Routes>
      
      
    </>
  )
}

export default App
