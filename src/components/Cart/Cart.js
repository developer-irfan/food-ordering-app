import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  //total amount
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  //check if cart have items
  const hasItems = cartCtx.items.length > 0;

  //cartItemRemoveHandler
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //cartItemAddHandler
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  //return
  return (
    <>
      <Modal onHideCart={props.onHideCart}>
        <div className="px-[10px]">
          <div>
            <ul>
              {cartCtx.items.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                  onAdd={cartItemAddHandler.bind(null, item)}
                />
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-[20px] py-4 ">
              Total Amount
            </span>
            <span className="font-semibold text-[20px]">${totalAmount}</span>
          </div>
          <div className="space-x-3">
            <button
              onClick={props.onHideCart}
              className="border-[2px] border-orange-700 px-4 py-2 rounded-[30px]"
            >
              Close
            </button>
            {hasItems && (
              <button className="bg-orange-700 border-[2px] border-orange-700 px-4 py-2 rounded-[30px] text-white">
                Order
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
