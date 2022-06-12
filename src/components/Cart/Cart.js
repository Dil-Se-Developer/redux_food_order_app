// import React, { useContext } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
// import { addItemToCartHandler, removeItemFromCartHandler } from '../../redux/actions/cartItemActions'
import { addItemToCartHandler, removeItemFromCartHandler } from '../../redux_toolkit/slices/cartItemSlice'
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
// import CartContext from '../../store/cart-context';

const Cart = (props) => {

  const { onClose } = props;

  const items = useSelector((state) => state.cartItems.items);
  const totalAmounts = useSelector((state) => state.cartItems.totalAmount);
  const dispatch = useDispatch();

  const totalAmount = `$${totalAmounts.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(removeItemFromCartHandler(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(addItemToCartHandler({ ...item, amount: 1 }));
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          // onRemove = {() => {
          //   cartItemRemoveHandler(item.id)
          // }}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;


// Code for useContext and useReducer project.


// const cartCtx = useContext(CartContext);

// const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
// const hasItems = cartCtx.items.length > 0;

// const cartItemRemoveHandler = (id) => {
//   cartCtx.removeItem(id);
// };

// const cartItemAddHandler = (item) => {
//   cartCtx.addItem({ ...item, amount: 1 });
// };

// const cartItems = (
//   <ul className={classes["cart-items"]}>
//     {cartCtx.items.map((item) => (
//       <CartItem
//         key={item.id}
//         name={item.name}
//         amount={item.amount}
//         price={item.price}
//         onRemove={cartItemRemoveHandler.bind(null, item.id)}
//         // onRemove = {() => {
//         //   cartItemRemoveHandler(item.id)
//         // }}
//         onAdd={cartItemAddHandler.bind(null, item)}
//       />
//     ))}
//   </ul>
// );
