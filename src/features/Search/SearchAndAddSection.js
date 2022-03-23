import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hr from "../decoration/Hr";
import {
  clearSearch,
  searchInTasks,
  toggleModal,
} from "../slices/Tasks/taskSlice";

function SearchAndAddSection() {
  const dispatch = useDispatch();
  const searchRef = useRef();
  function search(e) {
    if (e.target.value.length > 1) {
      dispatch(searchInTasks(e.target.value));
    } else {
      dispatch(clearSearch());
    }
  }

  function toggleModall() {
    console.log("toggleModal");
    dispatch(toggleModal());
  }
  function clearSearchh(e) {
    searchRef.current.value = "";
    dispatch(clearSearch());
  }
  return (
    <>
      <div className="xl:w-3/4 grid grid-cols-5 content-between py-2 m-1 mx-auto border-x-0 border-y-0">
        <div className="col-span-3">
          <input
            onChange={search}
            onClick={clearSearchh}
            ref={searchRef}
            className="border-x-0 border-b-2  bg-slate-100 outline-none border-y-0 w-full py-2 text-2xl px-2 text-gray-800 tracking-wider"
            placeholder="Search..."
          />
        </div>
        <div
          className="flex col-span-2 m-2
         justify-center rounded-md bg-indigo-600"
        >
          <button
            onClick={toggleModall}
            className="inline-block text-center p-2 rounded-lg  text-slate-100 font-thin text-xl justify-center"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="xl:w-3/4 mx-auto">
        <Hr />
      </div>
    </>
  );
}

export default SearchAndAddSection;
