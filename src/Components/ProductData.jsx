import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import { Link } from "react-router-dom";
const ProductData = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  console.log(product);
  const { image, title, description, price, category } = product;
  return (
    <div>
      <img src={image} alt='product' />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>category : {category}</p>
      <div>
        <span>{price}</span>
        <Link to={"/products"}>back to home</Link>
      </div>
    </div>
  );
};

export default ProductData;
