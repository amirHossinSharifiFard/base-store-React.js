import axios from "axios";

const fetchProductsRquest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST"
  };
};

const fetchProductsSucces = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRquest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const produuctsData = response.data;
        dispatch(fetchProductsSucces(produuctsData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};
