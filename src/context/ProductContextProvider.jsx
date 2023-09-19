import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

const Context = createContext();
const ProductContextProvider = (props) => {
  
  
    const [product, setProduct] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProducts);
    };
    fetchAPI();
  }, []);

  return <Context.Provider value={product}>
  {props.children}
  </Context.Provider>;
};

export default ProductContextProvider;
