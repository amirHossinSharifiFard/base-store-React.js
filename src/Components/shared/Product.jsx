import React, { useContext } from "react";
import { Link } from "react-router-dom";

// ICON
import trashIcon from "../../assets/icons/trash.svg";
// functions
import { isInCart, quantityCount, shorten } from "../../helpers/functions";

// context
import { CartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  const { title, price, image, id } = productData;

  return (
    <div>
      <img src={image} alt='product' style={{ width: "200px" }} />
      <h3>{shorten(title)} </h3>
      <p>price:{price}</p>
      <div>
        <Link to={`/products/${id}`}>details</Link>
        <div>
          {quantityCount(state, id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }>
              <img src={trashIcon} alt='trash ' width={"20px"} />
            </button>
          )}
          {quantityCount(state, id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }>
              -
            </button>
          )}

          {isInCart(state, id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }>
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }>
              add to cart
            </button>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
