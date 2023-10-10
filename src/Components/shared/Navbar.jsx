import React from "react";
import { Link } from "react-router-dom";

// context
// import { CartContext } from "../../context/CounterContextProvider";

// icons
import shopIcon from "../../assets/icons/shop.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const  state  = useSelector((state) => state.cartState);
  return (
    <div>
      <Link to='/products'>products</Link>
      <div>
        <Link to='/shopcart'>
          <img src={shopIcon} alt='shop' />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
