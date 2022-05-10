import React from "react";
import svg6 from "../../pngs/Thur.png";

function ImageDisplay() {
  return (
    <div
      className="justify-center bg-transparent flex flex-wrap mx-auto overflow-clip"
      style={{ height: "100px", zIndex: -1 }}
    >
      <img src={svg6} className="object-fill w-3/4 opacity-75" />
    </div>
  );
}

export default ImageDisplay;
