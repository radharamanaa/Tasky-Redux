import React from "react";

function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-center bg-slate-800 tracking-wider">
      <div
        className="flex flex-col sm:flex-row w-3/4 justify-between bottom-0 p-4 
      bg-slate-800 mx-auto text-slate-100"
      >
        <div className="flex p-2">
          <a
            href="https://radharamanaa.github.io/Simple-Tasky-Profile/"
            target={"_blank"}
          >
            {" "}
            About us
          </a>{" "}
        </div>
        <div className="flex p-2">
          <a
            href="https://radharamanaa.github.io/Simple-Tasky-Profile/"
            target={"_blank"}
          >
            {" "}
            About
          </a>
        </div>
        <div className="flex p-2">
          <a
            href="https://radharamanaa.github.io/ResponsiveTaskyDesign/"
            target={"_blank"}
          >
            Design -2
          </a>
        </div>
        <div className="flex p-2">
          <a
            href="https://radharamanaa.github.io/Simple-Tasky-Profile/"
            target={"_blank"}
          >
            React Project 2
          </a>
        </div>
        <div className="flex p-2">
          <a href="https://github.com/radharamanaa" target={"_blank"}>
            {" "}
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
