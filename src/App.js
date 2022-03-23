import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./features/footer/Footer";
import Header from "./features/header/Header";
import Modal from "./features/Modal/Modal";
import SearchAndAddSection from "./features/Search/SearchAndAddSection";
import Sidebar from "./features/Sidebar/Sidebar";
import { setState } from "./features/slices/Tasks/taskSlice";
import TaskSection from "./features/Tasks/TaskSection";

let initialLoad = true;
const keyForApp = "tasky-redux-abhi";
function App() {
  const store = useSelector((state) => state.task);

  useEffect(() => {
    if (!initialLoad) {
      localStorage.setItem(keyForApp, JSON.stringify(store));
    }
    initialLoad = false;
  }, [store]);

  const dispatch = useDispatch();

  useEffect(() => {
    let oldSt = localStorage.getItem(keyForApp);
    if (oldSt) {
      dispatch(setState(JSON.parse(oldSt)));
    }
    localStorage.setItem("tasky-redux-abhi", JSON.stringify(store));
  }, []);

  return (
    <div className="bg-slate-100">
      <Modal />
      <Header />
      <SearchAndAddSection />
      <div className="bg-gray-100 h-screen">
        <div className="flex flex-col sm:grid sm:grid-cols-5 md:w-11/12  xl:w-3/4  mx-auto border-x border-y  mt-4 ">
          <Sidebar />
          <TaskSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
