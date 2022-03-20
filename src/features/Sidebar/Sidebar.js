import React from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../../app/InitialState";
import SingleCategory from "./SingleCategory";

function Sidebar() {
  const categories = useSelector(getCategories);
  return (
    <div className="flex-col justify-center col-span-1 border-r-4 border-violet-700 bg-gray-100 pt-4">
      <h2 className="text-2xl text-orange-700 text-center items-center underline underline-offset-4">
        Categories
      </h2>
      <div className="flex-col px-2 mx-2 items-center">
        <div className="xs:flex md:flex-col p-2 gap-8 list-disc ">
          {categories.map((item) => (
            <SingleCategory name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
