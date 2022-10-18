import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, children }) => {
  // console.log(carts[0].shipping);

  let price = 0;
  // console.log(cart[0].quantity);
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const totals = price + shipping + tax;
  // console.log(tax);
  return (
    <div className="static">
      <h1 className="text-xl py-3">Order Summary</h1>
      <div className="text-start p-3">
        <h3 className="pb-3">Products Quantity: {cart.length}</h3>
        <h3 className="pb-3">Total Price: {price}</h3>
        <h3 className="pb-3">Total Shipping Cost: {shipping}</h3>
        <h3 className="pb-3">Tax: {tax}</h3>
        <h3 className="pb-3">Total: {totals.toFixed(2)}</h3>
      </div>

      <button onClick={clearCart} className="btn btn-danger mb-1 mt-3">
        Clear Cart
      </button>
      {children}
      <Link to="/order" className="btn btn-primary mb-10" type="">
        Review Order
      </Link>
    </div>
  );
};
export default Cart;
