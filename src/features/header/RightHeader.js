import React from "react";

function RightHeader() {
  return (
    <div>
      <ul className="flex flex-col md:flex-row flex-wrap justify-center sm:justify-end">
        {/* <li className="p-2 px-4 cursor-pointer">
          <a
            href="https://radharamanaa.github.io/Simple-Tasky-Profile/"
            target={"_blank"}
          >
            {" "}
            About
          </a>
        </li> */}
        {/* <li className="p-2 px-4 cursor-pointer">
          <a
            href="https://radharamanaa.github.io/ResponsiveTaskyDesign/"
            target={"_blank"}
          >
            Design -2
          </a>
        </li> */}
        {/* <li className="p-2 px-4 cursor-pointer">
          <a
            href="https://radharamanaa.github.io/Simple-Tasky-Profile/"
            target={"_blank"}
          >
            React Project 2
          </a>
        </li> */}
        <li className="p-2 px-4 cursor-pointer">
          <a href="https://github.com/radharamanaa" target={"_blank"}>
            {" "}
            About Me!
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RightHeader;
