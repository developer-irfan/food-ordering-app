import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        ref={ref}
        {...props.input}
        type="text"
        placeholder="amount"
        className="border-2 border-gray-500 py-1 rounded-lg px-2"
      />
    </>
  );
});

export default Input;
