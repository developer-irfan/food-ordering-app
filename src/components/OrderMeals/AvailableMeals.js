import React from "react";
import MealsItem from "./Meals Item/MealsItem";
const dummyMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest Fish",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schntile",
    description: "German Specialist",
    price: 19.99,
  },
  {
    id: "m3",
    name: "BBQ Burger",
    description: "Pakistani, raw",
    price: 43.2,
  },
  {
    id: "m4",
    name: "Biryanni ",
    description: "Indain, specialist",
    price: 8.5,
  },
];

function AvailableMeals() {
  return (
    <>
      <div>
        {dummyMeals.map((mealItem, index) => (
          <MealsItem
            key={index}
            id={mealItem.id}
            name={mealItem.name}
            des={mealItem.description}
            price={mealItem.price}
          />
        ))}
      </div>
    </>
  );
}

export default AvailableMeals;
