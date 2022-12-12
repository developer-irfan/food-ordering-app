import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
  //use context
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  //return statement
  return (
    <>
      <div>
        <div
          key={props.id}
          className="flex items-center justify-between shadow-lg mt-[50px] mx-[200px] py-6 px-[40px]"
        >
          <div className="content space-y-2">
            <h2 className="font-semibold text-[18px]">{props.name}</h2>
            <p className="italic">{props.des}</p>
            <h2 className="font-semibold text-orange-600">${props.price}</h2>
          </div>
          <div className="form">
            <MealsItemForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MealsItem;
