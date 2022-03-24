import React from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../../app/InitialState";
import Task from "./Task/Task";
import "../Tasks/css/task.css";

function TaskSection() {
  const tasks = useSelector(getTasks);
  return (
    <section
      className="task-section col-span-4 tasks flex flex-wrap task-section
    justify-center content-start bg-gray-100/80 sm:bg-gray-100/80 rounded-r-md"
    >
      <div className="flex flex-wrap task-items w-4/5 justify-center gap-4  m-4 p-2 bg-transparent">
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
      </div>
    </section>
  );
}

export default TaskSection;
