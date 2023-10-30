import React, { useContext } from "react";
// css
import styles from "./Cart.module.css";
// icons
import trashIcon from "../../assets/icons/trash.svg";

// funtions
import { shorten } from "../../helpers/functions";

// context
import { CartContext } from "../../context/CartContextProvider";

const Cart = ({ data }) => {
  const { dispatch } = useContext(CartContext);
  const { title, price, image, quantity } = data;
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt='product' />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}>
            <img src={trashIcon} alt='trash' width={"20px"} />
          </button>
        )}
        <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
