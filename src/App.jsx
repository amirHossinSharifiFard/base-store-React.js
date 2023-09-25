import "./App.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";

// components
import Store from "./Components/Store";
import ProductData from "./Components/ProductData";
import CounterContextProvider from "./context/CounterContextProvider";
import Navbar from "./Components/shared/Navbar";
import Cart from "./Components/ShopCart";

const App = () => {
  return (
    <div className='App'>
      <ProductContextProvider>
        <CounterContextProvider>
          <Navbar />
          <Routes>
            <Route path='/products/:id' element={<ProductData />} />
            <Route path='/products' element={<Store />} />
            <Route path='/shopcart' element={<Cart />} />
            <Route path='/*' element={<Navigate to='/products' />} />
          </Routes>
        </CounterContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;
