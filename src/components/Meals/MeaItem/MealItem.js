// import React, { useContext } from "react";
import React from "react";
import { useDispatch } from "react-redux";
// import { addItemToCartHandler } from "../../../redux/actions/cartItemActions"
import { addItemToCartHandler } from "../../../redux_toolkit/slices/cartItemSlice"
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
// import CartContext from "../../../store/cart-context";

const MealItem = (props) => {

  const { id } = props;
  const { name, description, price } = props.meal;


  const dispatch = useDispatch();

  const formatedPrice = `$${price.toFixed(2)};`;

  const addToCartHandler = (amount) => {
    dispatch(addItemToCartHandler({
      id: id,
      name: name,
      amount: amount,
      price: price,
    }));
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;


// Code for useContext and useReducer project.

// const cartCtx = useContext(CartContext);

// const addToCartHandler = (amount) => {
//   cartCtx.addItem({
//     id: id,
//     name: name,
//     amount: amount,
//     price: price,
//   });
// };