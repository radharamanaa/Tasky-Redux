import React from "react";
import {
  convertStringtoDate,
  dateStringToObj,
} from "../../../app/InitialState";

function DueDateAndFav({ dueDate, isFavorite }) {
  let classes =
    "date flex items-baseline py-1 m-4 font-semibold text-xs bg-slate-200 rounded-full ";
  if (isFavorite) {
    classes += "text-red-800";
  } else {
    classes += "text-gray-800";
  }

  return (
    <div className={classes}>
      <div className="time-icon flex items-baseline align-baseline self-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 self-end"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="date-string pr-4 self-center">
        {convertStringtoDate(dueDate)}
      </div>
    </div>
  );
}

export default DueDateAndFav;
