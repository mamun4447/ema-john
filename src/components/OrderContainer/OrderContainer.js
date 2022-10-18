import React from "react";

const OrderContainer = ({ cart, handleRemoveItem }) => {
  // console.log("hello", cart);
  const { id, name, price, quantity, img } = cart;
  // console.log(quantity);
  return (
    <div className="px-3 grid grid-cols-5 gap-3 border h-52 items-center rounded mb-2 shadow">
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="col-span-4 flex items-center justify-between mx-3">
        <div>
          <h1>{name}</h1>
          <p>Total Price: {price * quantity}</p>
          <p>Quantity: {quantity}</p>
        </div>

        <button onClick={() => handleRemoveItem(id)}>Delete</button>
      </div>
    </div>
  );
};

export default OrderContainer;
