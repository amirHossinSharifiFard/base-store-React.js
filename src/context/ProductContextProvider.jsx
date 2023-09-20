import React, { createContext, useEffect, useState } from "react";

// API
import { getProducts } from "../services/api";

export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProducts());
    };
    fetchAPI();
   
    
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
