const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const savedCart = (cart) => {
  const cartStringField = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringField);
};
const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  savedCart(cart);
};

export  {addToLs,getStoredCart};

// const getStoredCart = () => {
//   const storedCartString = localStorage.getItem("cart");
//   if (storedCartString) {
//     return JSON.parse(storedCartString);
//   }
//   return [];
// };

// const savedCart = (cart) => {
//   const cartStringField = JSON.stringify(cart);
//   localStorage.setItem('cart', cartStringField)

// }
// const addToLs = (id) => {
//   const cart = getStoredCart();
//   cart.push(id);
//   savedCart(cart)
// };


// export {addToLs};