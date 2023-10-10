import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// redux
import { fetchProducts } from "../redux/products/productsAction";
// components
import Product from "./shared/Product";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (productsState.products.length < 1) dispatch(fetchProducts());
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {productsState.loading ? (
        <p>loading .... </p>
      ) : productsState.error ? (
        <p>somthing is wrong</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
