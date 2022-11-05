import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";

const Shop = () => {
  // const { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];

    const ids = Object.keys(storedCart);
    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-4 mt-10 container mx-auto">
        {/* card  */}
        <div className="col-span-4 grid grid-cols-3 gap-2 ">
          {products.map((product) => (
            <Product
              key={product._id}
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
      <div className="text-center m-4">
        <div className="flex justify-center items-center">
          <p className="text-xl p-2">Page:{page}</p>
          <p className="text-xl p-2">Data:{size}</p>
        </div>
        <div className="btn-group">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={
                page === number ? "btn btn-secondary" : "btn btn-primary"
              }
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <select
          onChange={(event) => setSize(event.target.value)}
          className="select max-w-xs"
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
};;

export default Shop;
