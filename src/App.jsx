import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// context
import ProductContextProvider from "./context/ProductContextProvider";

// component
import Store from "./components/Store";
import ProductDetails from "./components/shared/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Store />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
