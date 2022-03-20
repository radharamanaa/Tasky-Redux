import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./features/header/Header";
import Modal from "./features/Modal/Modal";
import SearchAndAddSection from "./features/Search/SearchAndAddSection";
import Sidebar from "./features/Sidebar/Sidebar";
import { setState } from "./features/slices/Tasks/taskSlice";
import TaskSection from "./features/Tasks/TaskSection";

const keyForApp = "tasky-redux-abhi";
function App() {
  const store = useSelector((state) => state.task);

  // useEffect(() => {
  //   localStorage.setItem(keyForApp, store);
  // }, [store]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   let oldSt = localStorage.getItem(keyForApp);
  //   if (oldSt) {
  //     dispatch(setState(oldSt));
  //   }
  //   localStorage.setItem("tasky-redux-abhi", store);
  // }, []);

  return (
    <div className="bg-slate-100">
      <Modal />
      <Header />
      <SearchAndAddSection />
      <div className="bg-gray-100 h-screen">
        <div className="h-screen flex flex-col md:grid w-3/4 md:grid-cols-5 mx-auto border-x border-y  mt-4 ">
          <Sidebar />
          <TaskSection />
        </div>
      </div>
    </div>
  );
}

export default App;
