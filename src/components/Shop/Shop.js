import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";

const Shop = () => {
  const products = useLoaderData();

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="grid grid-cols-5 gap-4 mt-10 container mx-auto">
      {/* card  */}
      <div className="col-span-4 grid grid-cols-3 gap-2 ">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
      {/* summary  */}
      <div className="border max-h-[600px] rounded bg-red-100 sticky top-3 text-center">
        <Cart cart={cart} />
      </div>
    </div>
  );
};;

export default Shop;
