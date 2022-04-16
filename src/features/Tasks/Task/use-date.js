import date from "date-and-time";
import { useState, useEffect } from "react";

const useDate = (taskDate) => {
  let toggle = true;
  let objTaskDate = new Date(taskDate);
  const [diffDate, setDiffDate] = useState("");

  useEffect(() => {
    let clearing = setInterval(() => {
      let diffSecs = date.subtract(objTaskDate, new Date()).toSeconds();
      let diffDays = Math.floor(diffSecs / (60 * 60 * 24));
      let diffHours = Math.floor(
        Math.abs(diffSecs / (60 * 60) - diffDays * 24)
      );
      let diffMins = Math.floor(
        Math.abs(diffSecs / 60 - diffDays * 60 * 24 - diffHours * 60)
      );
      if (diffMins == 60) {
        diffMins = 0;
        diffHours += 1;
      }
      if (diffHours == 24) {
        diffHours = 0;
        diffDays += 1;
      }
      if (!toggle && diffMins > 1) {
        diffMins -= 1;
      }
      toggle = !toggle;
      setDiffDate(
        objTaskDate.toDateString().substring(0, 11) +
          "'" +
          objTaskDate.toDateString().substring(13, 15) +
          " - " +
          getDiffString(diffDays, diffHours, diffMins)
      );
    }, 1000);
    return () => clearInterval(clearing);
  }, []);

  return diffDate;
};

function getDiffString(days, hours, mins) {
  if (days < 0) {
    return "0D 0H 0m";
  }
  let daysSt = days + "D ";
  let hoursSt = hours + "H ";
  let minsSt = mins + "m ";
  return daysSt + hoursSt + minsSt;
}

export default useDate;
