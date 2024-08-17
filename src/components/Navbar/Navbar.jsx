import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-cyan-600 border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
              className="h-8"
              alt="cart Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Shopping Cart
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
