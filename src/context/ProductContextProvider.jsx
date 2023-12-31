import React, { useState, useEffect, createContext } from "react";

// API
import { getProducts } from "../services/api";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  
  const [products, setProducts] = useState([]);

  
  useEffect(() => {

    // get and set API
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
