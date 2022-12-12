import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  //get total carts items
  const totalCartItemsLength = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  //return
  return (
    <>
      <button
        onClick={props.onShowCart}
        className="flex items-center space-x-2 md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700 "
      >
        <CartIcon />
        <span>Your Cart {totalCartItemsLength}</span>
      </button>
    </>
  );
};

export default CartButton;
