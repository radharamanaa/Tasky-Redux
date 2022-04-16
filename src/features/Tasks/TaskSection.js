import React from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../../app/InitialState";
import Task from "./Task/Task";
import "../Tasks/css/task.css";
import doNothing from "../../svgs/Not found - HeartBroken (2).svg";
function TaskSection() {
  const tasks = useSelector(getTasks);
  let atleastOneTaskVisible = tasks.some((item) => item.isVisible);
  return (
    <section
      className="task-section col-span-4 tasks flex flex-wrap task-section
    justify-center content-start bg-gray-50 sm:bg-gray-100 rounded-r-md"
    >
      <div className="flex flex-wrap task-items w-4/5 justify-center gap-2  m-2 p-2 bg-transparent">
        {tasks.map((task) => (
          <Task
            key={task.title}
            title={task.title}
            desc={task.desc}
            date={task.dueDate}
            isFavorite={task.isFavorite}
            isVisible={task.isVisible}
            categories={task.categories}
          />
        ))}
        {atleastOneTaskVisible || (
          <div className="flex justify-center items-center p-2 m-2">
            <img src={doNothing} className="h-96 w-96" />
          </div>
        )}
      </div>
    </section>
  );
}

export default TaskSection;
