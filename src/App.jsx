import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// context
import ProductContextProvider from "./context/ProductContextProvider";

// component
import Store from "./components/Store";

const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/products' element={<Store />} />
        <Route path='/*' element={<Navigate to='/products' />} />
      </Routes>
    </ProductContextProvider>
  );
};

export default App;
