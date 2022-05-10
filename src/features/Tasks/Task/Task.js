import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hr from "../../decoration/Hr";
import { deleteTask, editTask } from "../../slices/Tasks/taskSlice";
import Category from "../Category";
import DateAndHearts from "./DateAndHearts";
import Favorite from "./Favorite";
import TaskDesc from "./TaskDesc";
import TaskTitle from "./TaskTitle";

function Task({ title, desc, date, isFavorite, isVisible, categories }) {
  const dispatch = useDispatch();
  // const searchString = useSelector((st) => st.counter.searchString);
  let classes =
    "task-item relative shadow-lg flex-wrap flex-col text-slate-700 border-2 " +
    "bg-slate-50" +
    "border-violet-700 rounded-lg transition-all w-48 bg-slate-100";
  if (isVisible) {
    classes += " flex";
  } else classes += " hidden";
  let noDisp = { display: "none" };
  let disp = { display: "block" };
  let id = title.split(" ")[0] + ((Math.random() * 1000) % 899);
  function enableCrud() {
    document.getElementById(id).style.display = "flex";
  }
  function disableCrud() {
    document.getElementById(id).style.display = "none";
  }
  function editTaskk() {
    dispatch(editTask(title));
  }
  function deleteTaskk() {
    if (!window.confirm("Sure you want to delete Task?")) {
      return;
    }
    let task = {};
    task.title = title;
    task.categories = categories;
    dispatch(deleteTask(task));
  }
  // useEffect(() => {
  //   if (isVisible) {

  //   }
  // }, []);
  return (
    <div
      className={classes}
      onMouseEnter={enableCrud}
      onMouseLeave={disableCrud}
    >
      <Favorite isFavorite={isFavorite} />
      <div className="flex flex-wrap ml-4 mt-6">
        {categories.map((item) => (
          <Category category={item} />
        ))}
      </div>
      <div className="h-32">
        <TaskTitle title={title} />
        <TaskDesc taskDesc={desc} />
      </div>
      <Hr />
      <DateAndHearts dueDate={date} isFavorite={isFavorite} />
      <div
        className="flex absolute bottom-0 left-0 right-0 w-full rounded-lg transition-all"
        id={id}
        style={noDisp}
      >
        <div className="flex h-full w-full bg-neutral-500/80">
          <div
            className="edit flex flex-1 p-4 items-center justify-center 
          text-sm  text-neutral-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              onClick={editTaskk}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <div
            className="delete flex flex-1 cursor-pointer
           items-center justify-center text-sm text-neutral-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              onClick={deleteTaskk}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
