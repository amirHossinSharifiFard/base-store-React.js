import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./shared/Cart";

// css
import styles from "./ShopCart.module.css";
// context
import { CartContext } from "../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter && (
        <div className={styles.payments}>
          <p>
            <span>total items:</span> {state.itemsCounter}
          </p>
          <p>
            <span>total totol:</span> {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}>
              clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}>
              check out
            </button>
          </div>
        </div>
      )}

      {state.checkOut && (
        <div className={styles.complete}>
          <h3>check out successfully</h3>
          <Link to='/product'>buy more</Link>
        </div>
      )}

      {!state.checkOut && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>want to buy?</h3>
          <Link to='/product'>go to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
