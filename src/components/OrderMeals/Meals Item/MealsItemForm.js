import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  //state for invalid amount
  const [amountIsValid, setAmountIsValid] = useState(true);

  //form input ref
  const amountInputRef = useRef();

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;
    if (
      enteredAmount.trim === 0 ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountToNumber);
  };

  //return here
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-[100px] space-y-2"
      >
        <Input
          ref={amountInputRef}
          input={{
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button className="bg-orange-800 px-8 py-2 text-white rounded-lg">
          Add
        </button>
        {!amountIsValid && (
          <p className="text-red-700">Please enter valid amount b/w (1-5)</p>
        )}
      </form>
    </>
  );
};

export default MealsItemForm;
