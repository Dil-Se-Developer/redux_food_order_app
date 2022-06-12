import React, { useState } from "react";
// import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';

function App() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;




// Code for useContext and useReducer project.

// return (
//   <CartProvider>
//     {cartIsShown && <Cart onClose={hideCartHandler} />}
//     <Header onShowCart={showCartHandler} />
//     <main>
//       <Meals />
//     </main>
//   </CartProvider>
// );