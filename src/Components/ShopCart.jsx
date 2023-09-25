import React, { useContext } from "react";
import { Link } from "react-router-dom";
// component
import Cart from "./shared/Cart";

// context
import { CartContext } from "../context/CounterContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>total items:{state.itemsCounter}</span>
          </p>
          <p>
            <span>total payment:{state.total}</span>
          </p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              checkOut
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>
             CLEAR
            </button>
          </div>
        </div>
      )}

      {state.checkOut && (
        <div>
          <h3>check out successfully</h3>
          <Link to='/products'>buy more</Link>
        </div>
      )}
      {!state.checkOut && state.itemsCounter==0 && (
        <div>
          <h3>items is clear</h3>
          <Link to='/products'>buy more</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
