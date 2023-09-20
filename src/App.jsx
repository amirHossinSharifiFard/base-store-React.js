import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// Context
import ProductContextProvider from "./context/ProductContextProvider";

// components
import Store from "./Components/Store";
import ProductData from "./Components/ProductData";

const App = () => {
  return (
    <div className='App'>
      <ProductContextProvider>
        <Switch>
          <Route path='/products/:id' component={ProductData} />
          <Route path='/products' component={Store} />
          <Redirect to='/products' />
        </Switch>
      </ProductContextProvider>
    </div>
  );
};

export default App;
