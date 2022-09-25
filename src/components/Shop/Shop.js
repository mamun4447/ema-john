import React, { useEffect, useState } from "react";
import Product from "../Products/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log(products);
  }, [products]);
  return (
    <div className="grid grid-cols-5 gap-4 mt-10 container mx-auto">
      {/* card  */}
      <div className="col-span-4 grid grid-cols-3 gap-2 ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {/* summary  */}
      <div>summary</div>
    </div>
  );
};

export default Shop;
