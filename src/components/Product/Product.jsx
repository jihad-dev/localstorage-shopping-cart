import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const { name, id, price, img } = product;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-96 w-full" src={img} alt="" />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-indigo-400 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          onClick={() => handleAddToCart(product)}
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Bye Now
        </button>
      </div>
    </div>
  );
};

export default Product;
