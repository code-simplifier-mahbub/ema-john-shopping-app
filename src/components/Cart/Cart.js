import React from "react";
import './Cart.css'

const Cart = ({cart}) => {
  console.log(cart)

  let price = 0;
  let shipping = 0;

  for(const product of cart){
    price = product.price +price;
    shipping = product.shipping + shipping
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;

  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price : {price} </p>
      <p>Total Shipping : {shipping}</p>
      <p>Tax : {tax}</p>
      <p>Grand Total : {grandTotal}</p>
    </div>
  );
};

export default Cart;
