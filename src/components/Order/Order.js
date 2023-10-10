import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) =>{
    const remaining = cart.filter(product=> product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  }

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} 
          product= {product}
          handleRemoveItem= {handleRemoveItem}
          ></ReviewItem>
        ))}
        {
          cart.length === 0 && <h2>No Item Found. Please <Link to = '/'>Shop More..</Link></h2>
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default Order;
