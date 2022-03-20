import React from "react";
import Logo from "./Logo";
import RightHeader from "./RightHeader";

function Header() {
  return (
    <div className="header-container justify-center bg-violet-600 flex flex-wrap mx-auto">
      <header className="flex flex-wrap items-center justify-between w-3/4 bg-violet-600 text-slate-50">
        <Logo />
        <RightHeader />
      </header>
    </div>
  );
}

export default Header;
