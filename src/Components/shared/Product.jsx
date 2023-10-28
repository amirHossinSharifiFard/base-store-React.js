import React from "react";

// functions
import { shorten } from "../helpers/functions";
const Product = ({ productData }) => {
  const { id, title, price, decription, category, image } = productData;
  return (
    <>
      <img src={image} alt='product' />
      <h3>{shorten(title)} </h3>
      <p>price:{price}</p>
      <div>
        <a>details</a>
        <button> add to cart</button>
      </div>
    </>
  );
};

export default Product;
