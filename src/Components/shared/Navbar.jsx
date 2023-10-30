import React, { useContext } from "react";
import { Link } from "react-router-dom";

// css
import styles from "./Navbar.module.css";
// image
import shopIcon from "../../assets/icons/shop.svg";
// context
import { CartContext } from "../../context/CartContextProvider";

function Navbar() {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to='/products'>
          Products
        </Link>
        <Link className={styles.iconContainer} to='/shopcart'>
          <img src={shopIcon} alt='shop' />
          <span>{state.itemsCounter}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
