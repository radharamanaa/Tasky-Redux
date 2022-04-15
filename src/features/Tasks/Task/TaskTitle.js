import React from "react";

function TaskTitle({ title }) {
  return (
    <div className=" task-name mt-2 text-md tracking-wide px-4 w-52 underline decoration-dotted decoration-blue-500 font-bold">
      {title}
    </div>
  );
}

export default TaskTitle;
