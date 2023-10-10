import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * quantity;
    shipping = product.shipping + shipping * quantity;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : {total} </p>
      <p>Total Shipping : {shipping}</p>
      <p>Tax : {tax}</p>
      <p>Grand Total : {grandTotal}</p>
      <button onClick={handleClearCart} className="clear-cart">Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
      {children}
    </div>
  );
};

export default Cart;
