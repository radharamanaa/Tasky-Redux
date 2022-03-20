import React from "react";

function Input({ placeholder }) {
  return (
    <input
      className="p-2 m-2 focus:outline-none border-x border-y self-stretch border-slate-200 rounded-lg text-sm w-full"
      list="cats"
      ref={categoriesRef}
      multiple
      placeholder={placeholder}
    />
  );
}

export default Input;
