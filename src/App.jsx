import "./App.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

// redux
import store from "./redux/store";

// components
import Store from "./Components/Store";
import ProductData from "./Components/ProductData";
import Navbar from "./Components/shared/Navbar";
import Cart from "./Components/ShopCart";

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductData />} />
          <Route path='/products' element={<Store />} />
          {/* <Route path='/shopcart' element={<Cart />} /> */}
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
