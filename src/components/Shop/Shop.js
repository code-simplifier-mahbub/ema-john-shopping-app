import './Shop.css'
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import { useState } from 'react';

const Shop = () => {

    const products = useLoaderData();
    const [cart, setCart] = useState([]);


    const handleAddToCart = (product) => {
      console.log(product)
      const newCart = [...cart, product]
      setCart(newCart)
    }
  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
