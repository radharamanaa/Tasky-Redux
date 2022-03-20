import React from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../../app/InitialState";
import Task from "./Task/Task";

function TaskSection() {
  const tasks = useSelector(getTasks);
  return (
    <section className="col-span-4 tasks flex flex-wrap min-h-max justify-center content-start rounded-xl bg-gray-100">
      <div className="flex flex-wrap task-items w-2/3 justify-center gap-4 bg-gray-100 m-4 p-2">
        {tasks.map((task) => (
          <Task
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
