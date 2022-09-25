import React, { useEffect, useState } from "react";
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

  const addToCart = (product) => {
    // console.log(product);
    const newCart = [...carts, product];
    setCart(newCart);
    // console.log(newCart);
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
