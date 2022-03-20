import React from "react";
import Hr from "../../decoration/Hr";
import Category from "../Category";
import DateAndHearts from "./DateAndHearts";
import TaskDesc from "./TaskDesc";
import TaskTitle from "./TaskTitle";

function Task({ title, desc, date, isFavorite, isVisible, categories }) {
  let classes =
    "task-item shadow-lg flex-wrap flex-col text-slate-700 border-2 " +
    "bg-slate-50" +
    "border-violet-700 rounded-lg";
  if (isVisible) {
    classes += " flex";
  } else classes += " hidden";
  return (
    <div className={classes}>
      <div className="flex flex-wrap ml-4 mt-6">
        {categories.map((item) => (
          <Category category={item} />
        ))}
      </div>
      <TaskTitle title={title || "Purchase an Iphone"} />
      <TaskDesc taskDesc={desc || "This is a nice desc"} />
      <Hr />
      <DateAndHearts dueDate={date} isFavorite={isFavorite} />
    </div>
  );
}

export default Task;
