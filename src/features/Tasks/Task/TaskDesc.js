import React from "react";

function TaskDesc({ taskDesc }) {
  return (
    <div className="h-20 mt-0 overflow-hidden task-desc px-4 py-2 text-xs text-gray-700 ">
      {taskDesc}
    </div>
  );
}

export default TaskDesc;
