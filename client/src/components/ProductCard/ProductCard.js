import React from "react";

const ProductCard = ({ product: { brand, model, price, desc } }) => {
  return (
    <div>
      <h1>Brand : {brand} </h1>
      <h1>Model : {model} </h1>
      <h1>Price : {price} </h1>
      <h1>Description : {desc} </h1>
    </div>
  );
};

export default ProductCard;
