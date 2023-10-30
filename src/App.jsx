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
import ShopCart from "./components/ShopCart";

const App = () => {
  return (
    <div >
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Store />} />
          <Route path='/shopcart' element={<ShopCart />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
    </div>
  );
};

export default App;
