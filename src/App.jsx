import "./App.css";
import React from "react";
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./components/Store";

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
