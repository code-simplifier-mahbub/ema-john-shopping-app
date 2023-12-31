import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./product.css";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price : ${price}</p>
        <p>Seller : {seller}</p>
        <p>Ratings : {ratings}</p>
      </div>
      <button onClick={()=> handleAddToCart(product)} className="btn-cart">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon = {faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
