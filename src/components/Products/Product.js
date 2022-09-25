import React from "react";

const Product = ({ product, addToCart }) => {
  //   console.log(props);
  //   const { product } = props;
  const { name, img, price, seller, ratings } = product;

  return (
    <div>
      <div className="card w-[286px] h-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[286px] w-[286px]" src={img} alt="Shoes" />
        </figure>

        <div className="card-body text-left">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>

          <p>Seller: ${seller}</p>
          <p>Ratings: ${ratings}</p>
          <div className="card-actions items-end">
            <button
              onClick={() => addToCart(product)}
              className="btn btn-primary w-full"
              type=""
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
