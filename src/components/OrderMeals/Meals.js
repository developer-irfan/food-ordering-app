import React from "react";
import Cart from "../Cart/Cart";
import AvailableMeals from "./AvailableMeals";
import MealsHeader from "./MealsHeader";

function Meals(props) {
  return (
    <>
      <MealsHeader />
      {props.cartIsShown && <Cart onHideCart={props.onHideCart} />}
      <AvailableMeals />
    </>
  );
}

export default Meals;
