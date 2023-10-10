import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";

const Shop = () => {
  //without useEffect,, we can use there  useLoaderData Hook for Products
  // loader come from router in app.js file
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const storedCart = getStoredCart();
  //   // console.log(storedCart)
  //   const saveCart = [];
  //   for (const id in storedCart) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     // console.log(addedProduct)
  //     if (addedProduct) {
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       saveCart.push(addedProduct);
  //     }
  //   }
  //   setCart(saveCart);
  // }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    let exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);

    addToDb(selectedProduct.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to='/order'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
