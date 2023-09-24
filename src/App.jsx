import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
          <Switch>
            <Route path='/products/:id' component={ProductData} />
            <Route path='/products' component={Store} />
            <Route path='/Cart' component={Cart} />
            <Redirect to='/products' />
          </Switch>
        </CounterContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;
