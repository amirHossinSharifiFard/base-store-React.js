import React from "react";
import { Link } from "react-router-dom";
import trashIcon from "../../assets/icons/trash.svg";

// functions
import { shortName, isInCart, quantityCount } from "../../helper/functions";

// redux

import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  addItem,
  removeItem,
  clear,
  checkout
} from "../../redux/cart/cartActions";
const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={productData.image} alt='product' style={{ width: "200px" }} />
      <h3>{shortName(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}> details</Link>
        <div>
          {quantityCount(state, productData.id) === 1 && (
            <button onClick={() => dispatch(removeItem(productData))}>
              <img src={trashIcon} alt='trash' style={{ width: "20px" }} />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button onClick={() => dispatch(decrease(productData))}>-</button>
          )}

          {isInCart(state, productData.id) ? (
            <button onClick={() => dispatch(increase(productData))}>+</button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
