import React, { useReducer } from "react";
const initialState = {
  selecedtItem: [],
  counter: 0,
  total: 0,
  checkOut: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selecedtItem.id === action.payload.id) {
        state.selecedtItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        selecedtItem: [state.selecedtItem]
      };

    case "REMOVE_ITEM":
      const newSelectedItem = state.selecedtItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selecedtItem: [...newSelectedItem]
      };
  }
};

const CounterContext = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <div></div>;
};

export default CounterContext;
// const cartReducer = (state, action) => {
//     switch (action.type) {
//       case "ADD_ITEM":
//         if (!state.selecedtItem.id === action.payload.id) {
//           state.selecedtItem.push({ ...action.payload, quantity: 1 });
//           return { ...state, selecedtItem: [...state.selecedtItem] };
//         }
//     }
//   };
