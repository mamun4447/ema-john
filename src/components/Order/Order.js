import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderContainer from "../OrderContainer/OrderContainer";

const Order = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  // console.log(cart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mt-10 container mx-auto">
        {/* card  */}
        <div className="col-span-4 grid grid-cols-1">
          {cart.map((carts) => (
            <OrderContainer
              key={carts.id}
              cart={carts}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
        {/* summary  */}
        <div className="border max-h-[600px] rounded bg-red-100 sticky top-3 text-center">
          <Cart clearCart={clearCart} cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Order;
