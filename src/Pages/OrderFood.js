import React from "react";
import Meals from "../components/OrderMeals/Meals";

const OrderFood = (props) => {
  return (
    <div>
      <Meals cartIsShown={props.cartIsShown} onHideCart={props.onHideCart} />
    </div>
  );
};

export default OrderFood;
