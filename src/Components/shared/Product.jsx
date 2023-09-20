import React from "react";
import { shortName } from "../../helper/functions";
import { Link } from "react-router-dom";
// function
const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt='product' style={{ width: "200px" }} />
      <h3>{shortName(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}> details</Link>
        <div>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
