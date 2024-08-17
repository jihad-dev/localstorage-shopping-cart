import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { addToLs, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // handleAddToCart

  const handleAddToCart = (bottle) => {
    const newBottle = [...cart, bottle];
    setCart(newBottle);
    addToLs(bottle.id);
  };
  // load storedCart data from localStorage
  useEffect(() => {
    if (products.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        const product = products.find((product) => product.id === id);
        if (product) {
          savedCart.push(product);
        }
      }
      setCart(savedCart);
    }
  }, [products]);
  return (
    <div>
      <h1>products Available: {products.length}</h1>
      <Cart cart={cart}></Cart>
      <div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {products?.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
