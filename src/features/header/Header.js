import React from "react";
import Logo from "./Logo";
import RightHeader from "./RightHeader";

function Header() {
  return (
    <div className="header-container justify-center bg-transparent flex flex-wrap mx-auto bg-sky-800 border-b-2 shadow-md shadow-sky-300  border-b-sky-300">
      <header className="flex flex-wrap items-center justify-center sm:justify-between w-3/4 text-slate-50">
        <Logo />
        <RightHeader />
      </header>
    </div>
  );
}

export default Header;
