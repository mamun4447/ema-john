import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const products = useLoaderData();
  return <div>Hello world: {products.length}</div>;
};

export default Order;
