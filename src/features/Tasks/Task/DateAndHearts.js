import React from "react";
import DueDateAndFav from "./DueDate";

function DateAndHearts({ dueDate, isFavorite }) {
  return (
    <div className="date-and-heart flex justify-start items-end h-16">
      <DueDateAndFav dueDate={dueDate} />
    </div>
  );
}

export default DateAndHearts;
