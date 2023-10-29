import React from "react";
import { Link } from "react-router-dom";

// functions
import { shorten } from "../../helpers/functions";

const Product = ({ productData }) => {
  
  const { title, price, image, id } = productData;

  return (
    <div>
      <img src={image} alt='product' style={{ width: "200px" }} />
      <h3>{shorten(title)} </h3>
      <p>price:{price}</p>
      <div>
        <Link to={`/products/${id}`}>details</Link>
        <button> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
