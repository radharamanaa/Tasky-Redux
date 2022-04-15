import React from "react";
import { useDispatch } from "react-redux";
import { clearIntroModal } from "../slices/Tasks/taskSlice";

function IntroModal({ isVisible }) {
  let classes = "modal fixed h-screen w-screen z-10 bg-slate-600/40 ";
  if (!isVisible) {
    classes += " hidden";
  } else {
    classes += " flex";
  }

  const dispatch = useDispatch();
  function closeIntro(e) {
    e.preventDefault();
    dispatch(clearIntroModal());
  }
  return (
    <div className={classes}>
      <div className="flex flex-col mx-auto m-4 h-52 top-1/3 bottom-1/3 bg-slate-100 justify-center rounded-lg p-4 border-orange-500">
        <div className="text-xl underline underline-offset-1 m-2 my-4 self-center">
          How to Task?
        </div>
        <div className=" text-slate-500 p-2 text-sm max-w-sm">
          You can add, edit and delete tasks. You can also search tasks, mark
          favorite and filter by category. Clicking on Search, also clears the
          search!
        </div>
        <div
          className="text-center justify-center m-2 p-2 hover:bg-indigo-500 cancel-wrapper 
        rounded-xl flex bg-indigo-700 text-gray-100 cursor-pointer"
          onClick={closeIntro}
        >
          <button type="Submit">Ok</button>
        </div>
      </div>
    </div>
  );
}

export default IntroModal;
