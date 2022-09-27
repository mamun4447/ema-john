import React from "react";

const Cart = ({ carts }) => {
  //   console.log(carts);

  let price = 0;
  // console.log(carts);
  let shipping = 0;
  let quantity = 0;
  for (const product of carts) {
    quantity = quantity + parseInt(product.quantity);
    price = price + parseFloat(product.price) * parseInt(quantity);
    shipping = shipping + parseFloat(product.shipping);
  }
  let tax = ((price / 100) * 3).toFixed(2);
  const total = price + shipping + parseFloat(tax);
  return (
    <div className="static">
      <h1 className="text-xl py-3">Order Summary</h1>
      <div className="text-start p-3">
        <h3 className="pb-3">Products Quantity: {carts.length}</h3>
        <h3 className="pb-3">Total Price: {price}</h3>
        <h3 className="pb-3">Total Shipping Cost: {shipping}</h3>
        <h3 className="pb-3">Tax: {tax}</h3>
        <h3 className="pb-3">Total: {total}</h3>
      </div>
      <button className="btn btn-danger mb-1 mt-3" type="">
        Clear Cart
      </button>
      <button className="btn btn-primary" type="">
        Review Order
      </button>
    </div>
  );
};

export default Cart;
