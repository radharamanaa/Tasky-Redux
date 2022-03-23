import React from "react";

function Category({ category }) {
  return (
    <div
      className="category inline text-white capitalize 
    bg-violet-700 text-xs 
    font-thin rounded-2xl py-2 px-2 
    mr-1 mt-2 self-start"
    >
      {category.name}
    </div>
  );
}

export default Category;
