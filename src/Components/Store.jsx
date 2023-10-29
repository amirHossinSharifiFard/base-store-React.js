import React, { useContext } from "react";

// context
import { ProductContext } from "../context/ProductContextProvider";
// product
import Product from "./shared/Product";
const Store = () => {
  const products = useContext(ProductContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" ,flexWrap:"wrap"}}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
