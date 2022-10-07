import React from "react";

const Cart = ({ carts }) => {
  // console.log(carts[0].shipping);

  let price = 0;
  // console.log(carts);
  let shipping = 0;
  let quantity = 0;
  for (const product of carts) {
    quantity = quantity + product.quantity;
    price = price + product.price * quantity;
    shipping = shipping + parseFloat(product.shipping);
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const total = price + shipping + tax;
  return (
    <div className="static">
      <h1 className="text-xl py-3">Order Summary</h1>
      <div className="text-start p-3">
        <h3 className="pb-3">Products Quantity: {carts.length}</h3>
        <h3 className="pb-3">Total Price: {price}</h3>
        <h3 className="pb-3">Total Shipping Cost: {shipping}</h3>
        <h3 className="pb-3">Tax: {tax}</h3>
        <h3 className="pb-3">Total: {total.toFixed(2)}</h3>
      </div>
      <button className="btn btn-danger mb-1 mt-3" type="">
        Clear Cart
      </button>
      <button className="btn btn-primary" type="">
        Review Order
      </button>
    </div>
  );
};;

export default Cart;
