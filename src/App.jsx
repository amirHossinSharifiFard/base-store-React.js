import "./App.css";
import React from "react";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./Components/Store";

const App = () => {
  return (
    <div className='App'>
      <ProductContextProvider>
        <Store />
      </ProductContextProvider>
    </div>
  );
};

export default App;
