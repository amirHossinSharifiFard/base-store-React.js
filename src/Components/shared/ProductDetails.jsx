import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

// css
import styles from "./ProductDetails.module.css";
// context
import { ProductContext } from "../../context/ProductContextProvider";

const ProductDetails = (props) => {
  const id = useParams();
  const data = useContext(ProductContext);
  const product = data[id.id - 1];
  const { title, price, image, description, category } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt='product' />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p>
          <span className={styles.category}>category:</span> {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to='/products'>nack to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
