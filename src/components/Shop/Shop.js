import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log(products);
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      // console.log(id);
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = saveCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const addToCart = (selectProduct) => {
    // console.log(product);
    let newCart = [];
    const exist = carts.find((product) => product.id === selectProduct.id);
    if (!exist) {
      selectProduct.quantity = 1;

      newCart = [...carts, selectProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectProduct.id);
      exist.quantity += 1;
      newCart = [...rest, selectProduct];
    }
    setCart(newCart);
    // console.log(newCart);
    addToDb(selectProduct.id);
  };
  // console.log(cart);

  return (
    <div className="grid grid-cols-5 gap-4 mt-10 container mx-auto">
      {/* card  */}
      <div className="col-span-4 grid grid-cols-3 gap-2 ">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {/* summary  */}
      <div className="border max-h-[600px] rounded bg-red-100 sticky top-3">
        <Cart carts={carts} />
      </div>
    </div>
  );
};;

export default Shop;
