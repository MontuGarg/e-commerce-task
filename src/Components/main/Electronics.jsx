import axios from "axios";
import React, { useEffect, useState } from "react";

function Electronics({cart,setCart ,setCartToggle,setProd,setToggle}) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(response => {
        let data= response.data;
        data= data.filter(product=>
            product.category.name.toLowerCase().includes("electronics")
        );
        setProducts(data);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on searchQuery
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const addToCart = (product) => {
    setCartToggle(true);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  function isPresent(id){
    let n=cart.length;
    for(let i=0;i<n;i++){
        if(cart[i].id===id){
            return true;
        }
    }
    return false;
  }
  return (
    <div className="all-div">
      <h3>Electronics</h3>
      <input
        type="text"
        className="search"
        placeholder="Search a product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="home-div">
        {filteredProducts.length === 0 ? (
          <div className="Nothing"><span>😐</span><br />Nothing related :(</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} width="100" onClick={()=>{setProd(product);setToggle(true)}}/>
              {isPresent(product.id)?<span className="addedCart" >✓</span>:<span className="addCart" onClick={() => addToCart(product)}>+</span>}
              <span className="category">{product.category?.name}</span>
              <div className="product-details" onClick={()=>{setProd(product);setToggle(true)}}>
                <span className="title">{product.title}</span>
                <span className="price">{product.price}$</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Electronics;
