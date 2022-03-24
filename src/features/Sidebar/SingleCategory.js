import React from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../slices/Tasks/taskSlice";

function SingleCategory({ name, isVisible }) {
  const dispatch = useDispatch();
  function filterCat() {
    dispatch(filterByCategory(name));
  }
  let style;
  if (!isVisible) {
    style = { display: "none" };
  } else {
    style = null;
  }
  return (
    <div
      style={style}
      className="self-center my-4 text-center p-2 rounded-full capitalize
     text-xs cursor-pointer bg-pink-500 text-slate-100 w-3/4"
      onClick={filterCat}
    >
      {name}
    </div>
  );
}

export default SingleCategory;
