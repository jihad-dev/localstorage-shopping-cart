import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { addToLs, getStoredCart, removeFromLS } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
const Products = () => {
  // const [products, setProducts] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // handleAddToCart

  const handleAddToCart = (bottle) => {
    const newBottle = [...cart, bottle];
    setCart(newBottle);
    addToLs(bottle.id);
  };
  // remove from cart
  const handleRemoveFromCart = (id) => {
    // visual cart remove
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    // remove from LS
    removeFromLS(id);
  };

  // load storedCart data from localStorage
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        const product = bottles.find((product) => product.id === id);
        if (product) {
          savedCart.push(product);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);
  return (
    <div>
      <h1 className="font-bold p-2">products Available: {bottles.length}</h1>
      <Cart cart={cart}handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {bottles?.map((bottle) => (
            <Product
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
