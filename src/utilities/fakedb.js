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
// remove from local storage
const removeFromLS = (id) => {
  const cart = getStoredCart();
  // removing every id
  const remaining = cart.filter((idx) => idx !== id);
  savedCart(remaining);
};
export { addToLs, getStoredCart,removeFromLS };
