import React, { useContext } from "react";

// context
import { ProductContext } from "../context/ProductContextProvider";
// product
import Product from "./shared/Product";
const Store = () => {
  const products = useContext(ProductContext);

  return (
    <>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </>
  );
};

export default Store;
