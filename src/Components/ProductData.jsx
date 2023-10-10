import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link ,useParams} from "react-router-dom";

// context


const ProductData = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useSelector(state => state.productsState.products);
  const product = data[id - 1];
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
