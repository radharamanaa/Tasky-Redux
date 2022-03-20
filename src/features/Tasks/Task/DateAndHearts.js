import React from "react";
import DueDateAndFav from "./DueDate";

function DateAndHearts({ dueDate, isFavorite }) {
  return (
    <div className="date-and-heart flex justify-start items-end">
      <DueDateAndFav dueDate={dueDate} isFavorite={isFavorite} />
    </div>
  );
}

export default DateAndHearts;
