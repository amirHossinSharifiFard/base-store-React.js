import React, { useContext } from "react";
import { Link } from "react-router-dom";
// image
import shopIcon from "../../assets/icons/shop.svg";
// context
import { CartContext } from "../../context/CartContextProvider";

function Navbar() {
  const { state } = useContext(CartContext);
  return (
    <div>
      <div>
        <Link to='/products'>Products</Link>
        <Link to='/cart'>
          <img src={shopIcon} alt='shop' />
          <span>{state.itemsCounter}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
