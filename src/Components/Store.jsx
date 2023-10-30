import React, { useContext } from "react";

// css
import styles from "./Store.module.css";
// context
import { ProductContext } from "../context/ProductContextProvider";
// product
import Product from "./shared/Product";
const Store = () => {
  const products = useContext(ProductContext);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
