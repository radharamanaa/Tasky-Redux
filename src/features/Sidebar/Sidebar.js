import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getFilterState } from "../../app/InitialState";
import { clearSearch, makeAllCatsVisible } from "../slices/Tasks/taskSlice";
import SingleCategory from "./SingleCategory";

function Sidebar() {
  const categories = useSelector(getCategories);
  const isFilterOn = useSelector(getFilterState);
  const dispatch = useDispatch();
  let style = { display: "flex" };
  if (!isFilterOn) {
    style = { display: "none" };
  } else {
    style = { display: "flex" };
  }
  function clearCats() {
    dispatch(makeAllCatsVisible());
    dispatch(clearSearch());
  }
  return (
    <div
      className="flex-col justify-center col-span-1 border-r-4 
    border-violet-700 bg-gray-100 pt-4 min-h-full"
    >
      <h2 className="text-2xl font-thin text-orange-700 text-center items-center underline underline-offset-4">
        Categories
      </h2>
      <div className="flex flex-row sm:flex-col px-2 mx-2 justify-center">
        <div className="flex sm:flex sm:flex-col p-2 gap-1 list-disc justify-center items-center">
          {categories.map((item) => (
            <SingleCategory
              key={item.name}
              name={item.name}
              isVisible={item.isVisible}
            />
          ))}
          <div
            style={style}
            className="bg-indigo-700 w-2/3  items-center first-letter:
            text-slate-100 text-center p-2 mx-auto rounded-md justify-center"
          >
            <button type="button" onClick={clearCats}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
