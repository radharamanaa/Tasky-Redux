import React from "react";

function SingleCategory({ name }) {
  return (
    <div className="my-4 text-center p-2 rounded-full text-xs cursor-pointer bg-indigo-600 text-slate-100">
      {name}
    </div>
  );
}

export default SingleCategory;
