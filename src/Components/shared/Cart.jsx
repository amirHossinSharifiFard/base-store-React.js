import React, { useContext } from "react";

// context
import { CartContext } from "../../context/CounterContextProvider";

// icon svg
import trashIcon from "../../assets/icons/trash.svg";
const Cart = (props) => {
  const { title, price, image, quantity } = props.data;
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>

      <div>
        {quantity > 1 ? (
          <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>
            <img src={trashIcon} alt='icon svg' style={{ width: "20px" }} />
          </button>
        )}
        <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
