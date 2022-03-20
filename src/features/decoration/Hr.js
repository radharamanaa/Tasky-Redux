import React from "react";

function Hr({ bgColor }) {
  const classes = "w-full h-px" + (bgColor || " bg-orange-700");
  return <div className={classes} />;
}

export default Hr;
