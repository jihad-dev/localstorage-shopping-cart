import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h1 className="p-2 ">Cart: {cart.length}</h1>
      <div className="flex  gap-2 pb-2">
        {cart.map((crt, i) => (
          <div className="" key={i}>
            <img className="w-20" src={crt?.img} alt="" />
            <button
              className="inline-flex items-center mt-3 mb-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => handleRemoveFromCart(crt.id)}
            >
             🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
