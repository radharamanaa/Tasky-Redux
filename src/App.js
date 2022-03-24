import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./features/footer/Footer";
import Header from "./features/header/Header";
import Modal from "./features/Modal/Modal";
import SearchAndAddSection from "./features/Search/SearchAndAddSection";
import Sidebar from "./features/Sidebar/Sidebar";
import { setState } from "./features/slices/Tasks/taskSlice";
import TaskSection from "./features/Tasks/TaskSection";
import "./features/Tasks/css/task.css";

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
    <div
      className=""
      style={{
        backgroundImage: 'url("https://source.unsplash.com/5nUNdLueQio")',
      }}
    >
      <Modal />
      <Header />
      <SearchAndAddSection />
      <div className="w-11/12 xl:w-full mx-auto h-screen">
        <div className="task-section flex flex-col sm:grid sm:grid-cols-5 md:w-11/12  xl:w-3/4  mx-auto mt-4 ">
          <Sidebar />
          <TaskSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
