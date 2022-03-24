import React from "react";
import Logo from "./Logo";
import RightHeader from "./RightHeader";

function Header() {
  return (
    <div className="header-container justify-center bg-transparent flex flex-wrap mx-auto">
      <header className="flex flex-wrap items-center justify-center sm:justify-between w-3/4 bg-transparent text-slate-50">
        <Logo />
        <RightHeader />
      </header>
    </div>
  );
}

export default Header;
