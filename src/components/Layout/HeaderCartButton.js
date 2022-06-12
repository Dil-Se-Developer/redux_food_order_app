// import React, { useContext, useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const { onClick } = props;

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const items = useSelector((state) => state.cartItems.items)
  // console.log(items);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;


// Code for useContext and useReducer project.

// const cartCtx = useContext(CartContext);

// const { items } = cartCtx;


