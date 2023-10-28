import React from "react";

// functions
import { shorten } from "../../helpers/functions";
const Product = ({ productData }) => {
  const { title, price, image } = productData;
  return (
    <div>
      <img src={image} alt='product' style={{ width: "200px" }} />
      <h3>{shorten(title)} </h3>
      <p>price:{price}</p>
      <div>
        <a>details</a>
        <button> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
