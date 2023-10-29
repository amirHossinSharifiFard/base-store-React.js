import React, { Children, createContext, useReducer } from "react";
const initialState = {
  selectItems: [],
  itemCounter: 0,
  total: 0,
  checlOut: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectItems.find((item) => item.id === action.payload.id)) {
        state.selectItems.push({
          ...action.payload,
          quantity: 1
        });
      }
      return { ...state, selectItems: [...state.selectItems] };
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectItems: [...newSelectedItem]
      };

    case "INCEASE":
      const indexI = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[indexI].quantity++;
      return {
        ...state
      };
    case "DECREASE":
      const indexD = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[indexD].quantity--;
      return {
        ...state
      };

    case "CHECKOUT":
      return { selectItems: [], itemCounter: 0, total: 0, checlOut: true };
    case "CLEAR":
      return {
        selectItems: [],
        itemCounter: 0,
        total: 0,
        checlOut: false
      };

    default:
      return state;
  }
};
const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
